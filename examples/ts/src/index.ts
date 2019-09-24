import { ValidationSchema, createFormValidation } from '@lemoncode/fonk';
import { isLowercase } from '@lemoncode/fonk-is-lowercase-validator';

const validationSchema: ValidationSchema = {
  field: {
    myField: [isLowercase.validator],
  },
};

const formValidation = createFormValidation(validationSchema);

Promise.all([
  formValidation.validateField('myField', 'Hello Test'),
  formValidation.validateField('myField', 'hello test'),
]).then(([failedResult, succeededResult]) => {
  document.getElementById('app').innerHTML = `
<div style="flex-grow: 1;margin-left:2rem;">
  <h2>Example with failed result:</h2>

<pre>
  formValidation.validateField('myField', 'Hello Test')
</pre>

  <h3>Result: </h3>
<pre>
${JSON.stringify(failedResult, null, 2)}
</pre>
</div>

<div style="flex-grow: 1;">
  <h2>Example with succeeded result:</h2>

<pre>
formValidation.validateField('myField', 'hello test')
</pre>

  <h3>Result: </h3>
<pre>
${JSON.stringify(succeededResult, null, 2)}
</pre>
</div>
`;
});
