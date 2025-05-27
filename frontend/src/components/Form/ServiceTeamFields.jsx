export default function ServiceTeamFields({ formData, handleInputChange }) {
    return (
      <>
        <div>
          <label className="block text-xs sm:text-sm font-medium mb-1">SERVICE CATEGORY</label>
          <select
            name="serviceCategory"
            value={formData.serviceCategory}
            onChange={handleInputChange}
            className="w-full p-2 sm:p-3 text-sm sm:text-base border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black appearance-none"
          >
            <option value="" disabled>Select your service</option>
            <option value="plumbing">Plumbing</option>
            <option value="electrical">Electrical</option>
            <option value="cleaning">Cleaning</option>
            <option value="renovation">Renovation</option>
            <option value="construction">Construction</option>
          </select>
        </div>
        <div>
          <label className="block text-xs sm:text-sm font-medium mb-1">SERVICE LOCATION</label>
          <input
            type="text"
            name="serviceLocation"
            value={formData.serviceLocation}
            onChange={handleInputChange}
            placeholder="Enter your Shop addresss"
            className="w-full p-2 sm:p-3 text-sm sm:text-base border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black"
          />
        </div>
      </>
    );
  }