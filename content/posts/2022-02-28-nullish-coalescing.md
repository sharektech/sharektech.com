---
title: 'شرح Nullish Coalescing أو ?? في تايب سكريبت'
date: 2022-02-28
slug: 'nullish-coalescing'
template: 'post'
categories:
  - javascript
tags:
  - TypeScript
thumbnail: '../thumbnails/sharektech.png'
---

تعتبر **Nullish Coalescing** أو `?? Operator` من المزايا التي أضيفت لإصدار ES2020 من [JavaScript](/what-is-javascript/)، وقد كان [TypeScript](/what-is-typescript/) سباقا إلى دعمها منذ الإصدار 3.7.

فماهي إذن هذه الميزة ؟ وما الحالات التي قد نحتاجها فيها ؟

سنجيب عل هذه الأسئلة في هذه التدوينة الجديدة.

## نريد التحقق من أن القيمة مُعَرَّفَة

في كثير من الأحيان نكون بحاجة للتأكد من أن قيمة معينة مُعَرَّفَة (Defined). وعندما أقول بأنها معرفة فإنني أعني بذلك أن تلك القيمة تخالف `undefined` وتخالف `null`.

هذا هو المقصود بالقيمة المعرفة في جافا سكريبت.

لذلك عند قراءة الشفرة المصدرية (Source code) لعدد من المشاريع ـ [مثل Vue.js](https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.js) ـ نجدها تستعين بدالة مساعدة (Helper function) تسميها في العادة `isDefined` أو `isDef` وتستخدمها كلما أرادت التأكد من قيمة معينة تخالف القيمتين `undefined` و `null` بدون أن تضطر لكتابة الشرط `if(value !== undefined && value !== null)` في كل مرة.

### مثال

لنقل بأننا نريد إنشاء دالة تقوم بإضافة وسم `script` إلى صفحتنا ديناميكيا وتقبل بعد الخيارات لإضافتها إلى الوسم على شكل attributes مثل `defer` و `async`.

```js
function isDef(v) {
  return v !== undefined && v !== null;
}

function loadScriptDynamically(src, options = {}) {
  const script = document.createElement('script');
  script.src = src;
  script.defer = isDef(options.defer) ? options.defer : true;
  script.async = isDef(options.async) ? options.async : true;
  document.body.append(script);
}

loadScriptDynamically('my-script.js');
// <script src="my-script.js" defer async>
```

تلاحظون أنني استعنت بال `isDef` التي تكلمت عليها سابقا للتأكد من أن كل خيار يخالف `undefined` و `null` قبل أن نضيفه للوسم، وإلا فإنني أضيف قيمة بدئية قررتُ أنها `true` في هذا المثال. يعني أن كل وسم `<script>` يتم توليد دينامكيا بواسطة هذه الدالة سيكون `defer` و `async` إلا إذا طلبنا منه عكس ذلك كما في المثال أدناه:

```js
loadScriptDynamically('my-script.js', {
  defer: false,
});
// <script src="my-script.js" async>
```

## هنا يفيدنا Nullish Coalescing

بما أن غرضنا هو إعطاء قيمة بديلة في حال كان القيمة الأساسية غير مُعَرَّفة فإن الرمز `??` الذي يعبر عن ميزة **Nullish Coalescing** هو ما نحتاج هنا.

```js
function loadScriptDynamically(src, options = {}) {
  const script = document.createElement('script');
  script.src = src;
  script.defer = options.defer ?? true;
  script.async = options.async ?? true;
  document.body.append(script);
}

loadScriptDynamically('my-script.js');
// <script src="my-script.js" defer async>
```

لاحظوا بأننا تخلصنا بفضل هذه الميزة من `isDef` وكذلك من Ternary condition.

الكود أصبح أبسط وأوضح.

## مالفرق بين ?? و ||

قد يسأل أحدكم لماذا لا نستخدم `||` الموجود في لغة البرمجة [جافا سكريبت](/what-is-javascript/) منذ زمن طويل ؟

السؤال هذا قد يكون مبررا إذا علمنا أن الرمزين يتقاطعان في عدة مناحي، ولكن الفرق الأساسي أن `||` يستخدم للتحوط من ال Falsy values، بينما `??` يستخدم لأخذ الإحتياط من `undefined` و `null` **فقط** وليس كل Falsy values.

وعندما نتحدث عن Falsy values في جافا سكريبت فإنها لا تخرج عما يلي:

- `false`
- `""`
- `0`
- `-0`
- `NaN`
- `null`
- `undefined`
- `0n`

نلاحظ إذن بأن `undefined` و `null` هما فعلا من بين ال Falsy values في جافا سكريبت، وبالتالي فعند استخدامهما مع كل من `??` و `||` سنحصل على نفس النتائج.

```js
null ?? 'fallback'; // fallback
null || 'fallback'; // fallback

undefined ?? 'fallback'; // fallback
undefined || 'fallback'; // fallback
```

أما عند استخدام باقي ال Falsy values فسيظهر الفرق جليا بين الرمزين:

```js
0 ?? 'fallback'; // 0
0 || 'fallback'; // fallback

false ?? 'fallback'; // false
false || 'fallback'; // fallback

'' ?? 'fallback'; // ""
'' || 'fallback'; // fallback
```

الرمز `??` يأخذ القيمة الأولى حتى ولو كانت **Falsy** مادامت تخالف `undefined` و `null` فقط.

هذا يعني أنه لو استعملنا `||` في مثالنا السابق فسنحصل على نتائج غير متوقعة عندما نمرر خيارات (options) من فصيلة ال Falsy values:

```js
function loadScriptDynamically(src, options = {}) {
  const script = document.createElement('script');
  script.src = src;
  script.defer = options.defer || true;
  script.async = options.async || true;
  document.body.append(script);
}

loadScriptDynamically('my-script.js', {
  defer: false,
});
// <script src="my-script.js" defer async> !!!
```

لماذا أضيف `defer` إلى الوسم `<script>` رغم أننا قلنا للدالة عبر ال Options أننا لا نريده ؟

الجواب حتما واضح الآن! لأن الرمز `||` يلجأ للقيمة الإحتياطية (fallback) عندما يجد أن القيمة الأولى في اليسار هي واحدة من ال falsy values الثمانية التي استعرضناها أعلاه، وبالتالي أضاف `defer` هنا لأن ال fallback هي `true`.

لذلك رمز `??` الذي يعبر عن Nullish Coalescing هو ما نحتاجه في مثل هذه الحالات.

آمل أن الموضوع واضح كفاية من خلال المثال الذي أخدناه.

صندوق التعليقات متاح إذا كانت لديك أي ملاحظات أو أسئلة.

<Author slug="ahmed" />
