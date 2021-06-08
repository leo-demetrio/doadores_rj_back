module.exports.createObjectInstitut = (data) => {
        return {
            name: data.name,
            email: data.email,
            cnpj: data.cnpj,
            residential_phone: data.residential_phone,
            celphone_1: data.celphone_1,
            celphone_2: data.celphone_2,
            zip_code: data.zip_code,
            city: data.city,
            street: data.street,
            number: data.number,
            complement: data.number
        }

}
