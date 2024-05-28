import editUser from "@/assets/pen.svg";
import Image from "next/image";

const MyProfile = () => {
  return (
    <div className="p-6 w-full">
      <h2 className="text-2xl font-semibold text-amber-600">My Profile</h2>

      {/* Full Width Card */}
      <div className="m-6 px-10 py-6 rounded shadow bg-white">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-lg font-medium">User Name</h2>
            <h2 className="text-sm text-gray-600">User Email</h2>
            <h2 className="text-sm text-gray-600">User Location</h2>
          </div>
          <div className="flex items-center space-x-2">
            <Image src={editUser} alt="Edit image" width={20} height={20} />
            <h2 className="text-sm text-blue-500 cursor-pointer">Edit</h2>
          </div>
        </div>
      </div>

      {/* Two Columns Grid */}
      <div className="grid grid-cols-2 gap-5 m-6 p-10 rounded shadow bg-white">
        <div className="bg-gray-100 p-5 rounded">
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <div className="flex justify-between items-center">
                <h2 className="card-title">Personal Information</h2>
                <Image src={editUser} alt="Edit image" width={20} height={20} />
              </div>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Edit</button>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-100 p-5 rounded">
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <div className="flex justify-between items-center">
                <h2 className="card-title">Timeout Preference</h2>
                <Image src={editUser} alt="Edit image" width={20} height={20} />
              </div>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Edit</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Another Two Columns Grid */}
      <div className="grid grid-cols-2 gap-5 m-6 p-10 rounded shadow bg-white">
        <div className="bg-gray-100 p-5 rounded">
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <div className="flex justify-between items-center">
                <h2 className="card-title">Phone Number</h2>
                <Image src={editUser} alt="Edit image" width={20} height={20} />
              </div>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Edit</button>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-100 p-5 rounded">
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <div className="flex justify-between items-center">
                <h2 className="card-title">Password</h2>
                <Image src={editUser} alt="Edit image" width={20} height={20} />
              </div>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Edit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
