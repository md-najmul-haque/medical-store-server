import Supplier from "../models/Supplier.js";

export const createSupplierService = async (data) => {
    const supplier = await Supplier.create(data);
    return supplier
}

export const getSupplierService = async () => {
    const supplier = await Supplier.find({});
    return supplier
}

//Update Supplier 
export const updateSupplierService = async (data, id) => {

    const { _id, supplierId, supplierName, supplierPhoneNo, email, address, contactPersonPhoneNo, contactPerson, status, district, zipCode, thana } = data

    const updatedSupplierData = {
        supplierId: supplierId,
        supplierName: supplierName,
        supplierPhoneNo: supplierPhoneNo,
        email: email,
        address: address,
        contactPersonPhoneNo: contactPersonPhoneNo,
        contactPerson: contactPerson,
        status: status,
        district: district,
        zipCode: zipCode,
        thana: thana
    }

    const result = await User.findOneAndUpdate(
        { _id: id },
        {
            $set: {
                ...updatedSupplierData
            }

        },
        { upsert: true }
    )

    return result

}

export const deleteSupplierService = async (id) => {
    const supplier = await Supplier.findOneAndDelete({ _id: id });
    return supplier
}



