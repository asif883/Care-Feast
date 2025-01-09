import { useForm } from "react-hook-form";
import Select from "react-select";

const AddPatientForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const genderOptions = [
    { value: "Male", label: "Male" },
    { value: "Female", label: "Female" },
    { value: "Other", label: "Other" },
  ];

  const onSubmit = (data) => {
    console.log("Patient Data:", data);
    // Replace with API call to submit the data
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center">Add Patient</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 sm:grid-cols-2 gap-6"
      >
        {/* Left Column */}
        <div>
          {/* Patient Name */}
          <div className="mb-4">
            <input
              type="text"
              placeholder="Patient Name"
              {...register("name", { required: "Patient Name is required" })}
              className="input input-bordered w-full"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>

          {/* Diseases */}
          <div className="mb-4">
            <textarea
              placeholder="Diseases (comma separated)"
              {...register("diseases")}
              className="textarea textarea-bordered w-full"
            ></textarea>
          </div>

          {/* Allergies */}
          <div className="mb-4">
            <textarea
              placeholder="Allergies (comma separated)"
              {...register("allergies")}
              className="textarea textarea-bordered w-full"
            ></textarea>
          </div>

          {/* Room Number */}
          <div className="mb-4">
            <input
              type="text"
              placeholder="Room Number"
              {...register("roomNumber", { required: "Room Number is required" })}
              className="input input-bordered w-full"
            />
            {errors.roomNumber && (
              <p className="text-red-500 text-sm">{errors.roomNumber.message}</p>
            )}
          </div>

          {/* Bed Number */}
          <div className="mb-4">
            <input
              type="text"
              placeholder="Bed Number"
              {...register("bedNumber", { required: "Bed Number is required" })}
              className="input input-bordered w-full"
            />
            {errors.bedNumber && (
              <p className="text-red-500 text-sm">{errors.bedNumber.message}</p>
            )}
          </div>
        </div>

        {/* Right Column */}
        <div>
          {/* Floor Number */}
          <div className="mb-4">
            <input
              type="text"
              placeholder="Floor Number"
              {...register("floorNumber")}
              className="input input-bordered w-full"
            />
          </div>

          {/* Age */}
          <div className="mb-4">
            <input
              type="number"
              placeholder="Age"
              {...register("age", { required: "Age is required" })}
              className="input input-bordered w-full"
            />
            {errors.age && (
              <p className="text-red-500 text-sm">{errors.age.message}</p>
            )}
          </div>

          {/* Gender */}
          <div className="mb-4">
            <Select
              options={genderOptions}
              placeholder="Select Gender"
              className="w-full"
              onChange={(selected) =>
                register("gender").onChange({
                  target: { value: selected?.value },
                })
              }
            />
            {errors.gender && (
              <p className="text-red-500 text-sm">{errors.gender.message}</p>
            )}
          </div>

          {/* Contact Information */}
          <div className="mb-4">
            <input
              type="text"
              placeholder="Contact Information"
              {...register("contactInfo", {
                required: "Contact Information is required",
              })}
              className="input input-bordered w-full"
            />
            {errors.contactInfo && (
              <p className="text-red-500 text-sm">
                {errors.contactInfo.message}
              </p>
            )}
          </div>

          {/* Emergency Contact */}
          <div className="mb-4">
            <input
              type="text"
              placeholder="Emergency Contact"
              {...register("emergencyContact", {
                required: "Emergency Contact is required",
              })}
              className="input input-bordered w-full"
            />
            {errors.emergencyContact && (
              <p className="text-red-500 text-sm">
                {errors.emergencyContact.message}
              </p>
            )}
          </div>
        </div>

        {/* Submit Button */}
        <div className="col-span-1 sm:col-span-2">
          <button
            type="submit"
            className="bg-gray-800 text-gray-200 font-semibold py-3 px-6 rounded-xl w-full"
          >
            Add Patient
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddPatientForm;
