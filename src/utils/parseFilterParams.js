const parseStringOrNumber = (value, type) => {
  const parsedValue = typeof value === 'string' ? value.trim() : undefined;
  if (!parsedValue) return;

  if (type === 'number') {
    const parsedNumber = parseInt(parsedValue, 10);
    if (Number.isNaN(parsedNumber)) {
      return;
    }
    return parsedNumber;
  }

  if (type === 'string') {
    return parsedValue;
  }

  return undefined;
};

const parseArray = (value) => {
  if (Array.isArray(value)) {
    return value.map((item) => item.trim());
  }
  return value ? [value.trim()] : [];
};

export const parseFilterParams = (query) => {
  const { price, flowers, recipient, occasion, style } = query;

  return {
    price: parseArray(price),
    flowers: parseArray(flowers),
    recipient: parseArray(recipient),
    occasion: parseArray(occasion),
    style: parseArray(style),
  };
};
