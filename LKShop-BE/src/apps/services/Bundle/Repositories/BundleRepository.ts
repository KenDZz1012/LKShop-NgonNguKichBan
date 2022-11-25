import Bundle from "../DTO/Bundle";
import BundleCreate from "../DTO/BundlleCreate";
import BundleFilter from "../DTO/BundleFilter";
import BundleUpdate from "../DTO/BundleUpdate";
import BundleModel from "../Models/BundleModel";

const getListBundleHandler = async (input: BundleFilter) => {
    return await BundleModel.find(input)
}

const getBundleByIdHandler = async (input: String) => {
    return await BundleModel.findById(input)
}

const createBundleHandler = async (input: BundleCreate) => {
    const bundle = await BundleModel.findOne({ BundleName: input.BundleName })
    if (bundle) {
        return {
            isSuccess: false,
            msgString: `bundle ${input.BundleName} is exist`
        }
    }
    const bundleCreate = await BundleModel.create(input)
    return {
        isSuccess: true,
        msgString: `Create Success`,
        data: bundleCreate
    }
}

const updateBundleHandler = async (input: BundleUpdate) => {
    return await BundleModel.updateOne({ _id: input.Id }, { $set: input })
}

const deleteBundleHandler = async (input: String) => {
    return await BundleModel.deleteOne({ _id: input })
}

export {
    getListBundleHandler,
    getBundleByIdHandler,
    createBundleHandler,
    updateBundleHandler,
    deleteBundleHandler
}