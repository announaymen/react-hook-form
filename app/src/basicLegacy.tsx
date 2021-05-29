import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

let renderCounter = 0;

const BasicLegacy: React.FC = (props: any) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<{
    firstName: string;
    lastName: string;
    min: string;
    max: string;
    minDate: string;
    maxDate: string;
    minLength: string;
    minRequiredLength: string;
    selectNumber: string;
    pattern: string;
    radio: string;
    checkbox: string;
    checkboxArray: string[];
    multiple: string;
    validate: string;
    nestItem: {
      nest1: string;
    };
    arrayItem: { test1: string; test2: string }[];
  }>({
    mode: props.match.params.mode,
  });
  const [onInvalidCalledTimes, setOnInvalidCalledTimes] = useState(0);
  const onValid = () => {};
  const onInvalid = () => setOnInvalidCalledTimes((prevCount) => prevCount + 1);

  renderCounter++;

  return (
    <form onSubmit={handleSubmit(onValid, onInvalid)}>
      <input
        name="nestItem.nest1"
        placeholder="nest.nest1"
        ref={register('nestItem.nest1', { shouldListen: true, required: true })}
      />
      {errors.nestItem?.nest1 && <p>nest 1 error</p>}
      <input
        name="arrayItem.0.test1"
        placeholder="arrayItem[0].test1"
        ref={register('arrayItem.0.test1', {
          shouldListen: true,
          required: true,
        })}
      />
      {errors.arrayItem?.[0]?.test1 && <p>array item 1 error</p>}
      <input
        name="firstName"
        ref={register('firstName', { shouldListen: true, required: true })}
        placeholder="firstName"
      />
      {errors.firstName && <p>firstName error</p>}
      <input
        name="lastName"
        ref={register('lastName', {
          shouldListen: true,
          required: true,
          maxLength: 5,
        })}
        placeholder="lastName"
      />
      {errors.lastName && <p>lastName error</p>}
      <input
        type="number"
        name="min"
        ref={register('min', { shouldListen: true, min: 10, required: true })}
        placeholder="min"
      />
      {errors.min && <p>min error</p>}
      <input
        type="number"
        name="max"
        ref={register('max', { shouldListen: true, max: 20, required: true })}
        placeholder="max"
      />
      {errors.max && <p>max error</p>}
      <input
        type="date"
        name="minDate"
        ref={register('minDate', {
          shouldListen: true,
          min: '2019-08-01',
          required: true,
        })}
        placeholder="minDate"
      />
      {errors.minDate && <p>minDate error</p>}
      <input
        type="date"
        name="maxDate"
        ref={register('maxDate', {
          shouldListen: true,
          max: '2019-08-01',
          required: true,
        })}
        placeholder="maxDate"
      />
      {errors.maxDate && <p>maxDate error</p>}
      <input
        name="minLength"
        ref={register('minLength', {
          shouldListen: true,
          minLength: 2,
          required: true,
        })}
        placeholder="minLength"
      />
      {errors.minLength && <p>minLength error</p>}
      <input
        name="minRequiredLength"
        ref={register('minRequiredLength', {
          shouldListen: true,
          minLength: 2,
          required: true,
        })}
        placeholder="minRequiredLength"
      />
      {errors.minRequiredLength && <p>minRequiredLength error</p>}
      <select
        name="selectNumber"
        ref={register('selectNumber', { shouldListen: true, required: true })}
      >
        <option value="">Select</option>
        <option value={1}>1</option>
        <option value={2}>1</option>
      </select>
      {errors.selectNumber && <p>selectNumber error</p>}
      <input
        name="pattern"
        ref={register('pattern', {
          shouldListen: true,
          pattern: /\d+/,
          required: true,
        })}
        placeholder="pattern"
      />
      {errors.pattern && <p>pattern error</p>}
      Radio1
      <input
        type="radio"
        name="radio"
        ref={register('radio', { shouldListen: true, required: true })}
        value="1"
      />
      Radio2
      <input
        type="radio"
        name="radio"
        ref={register('radio', { shouldListen: true, required: true })}
        value="2"
      />
      Radio3
      <input
        type="radio"
        name="radio"
        ref={register('radio', { shouldListen: true, required: true })}
        value="3"
      />
      {errors.radio && <p>radio error</p>}
      <input
        type="checkbox"
        name="checkbox"
        ref={register('checkbox', { shouldListen: true, required: true })}
      />
      {errors.checkbox && <p>checkbox error</p>}
      <input
        type="checkbox"
        name="checkboxArray"
        value="1"
        ref={register('checkboxArray', { shouldListen: true, required: true })}
      />
      <input
        type="checkbox"
        name="checkboxArray"
        value="2"
        ref={register('checkboxArray', { shouldListen: true, required: true })}
      />
      <input
        type="checkbox"
        name="checkboxArray"
        value="3"
        ref={register('checkboxArray', { shouldListen: true, required: true })}
      />
      {errors.checkboxArray && <p>checkboxArray error</p>}
      <select
        name="multiple"
        multiple
        ref={register('multiple', { shouldListen: true, required: true })}
      >
        <option value="optionA">optionA</option>
        <option value="optionB">optionB</option>
      </select>
      {errors.multiple && <p>multiple error</p>}
      <input
        name="validate"
        type="validate"
        placeholder="validate"
        ref={register('validate', {
          shouldListen: true,
          validate: (value) => value === 'test',
        })}
      />
      {errors.validate && <p>validate error</p>}
      <button id="submit">Submit</button>
      <button type="button" id="resetForm" onClick={() => reset()}>
        Reset
      </button>
      <div id="renderCount">{renderCounter}</div>
      <div id="on-invalid-called-times">
        onInvalid callback called {onInvalidCalledTimes} times
      </div>
    </form>
  );
};

export default BasicLegacy;
