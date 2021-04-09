const serializeData = (
  title,
  bookingDate,
  street,
  city,
  country,
  name,
  email,
  phone
) => ({
  title: title.value,
  bookingDate: bookingDate.value,
  address: {
    street: street.value,
    city: city.value,
    country: country.value
  },
  customer: {
    name: name.value,
    email: email.value,
    phone: phone.value
  }
})

export default serializeData
