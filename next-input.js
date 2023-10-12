//auto focus on next input field after giving a value to prev input field
//field names in a format field_n

const handleChange = (e: any, field: any) => {
    setFieldValue(field, e.target.value);

    const { maxLength, name } = e.target;

    const [fieldName, fieldIndex] = name.split("_");

    let fieldIntIndex = parseInt(fieldIndex, 10);

    if (e.target.value.length >= maxLength) {
      if (fieldIntIndex >= 1) {
        const nextfield = document.querySelector(
          `input[name=field_${fieldIntIndex + 1}]`
        );

        if (nextfield !== null) {
          //@ts-ignore
          nextfield.focus();
        }
      }
    } else if (e.target.value.length === 0) {
      if (fieldIntIndex >= 1) {
        const prevfield = document.querySelector(
          `input[name=field_${fieldIntIndex - 1}]`
        );

        if (prevfield !== null) {
          //@ts-ignore
          prevfield.focus();
        }
      }
    }
  };
