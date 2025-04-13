export default function AccountTypeSelector({ accountType, handleAccountTypeChange }) {
    return (
      <div>
        <label className="block text-xs sm:text-sm font-medium mb-1">
          ACCOUNT TYPE <span className="text-red-500">*</span>
        </label>
        <div className="flex flex-wrap space-x-4 sm:space-x-6 mt-1 sm:mt-2">
          <label className="flex items-center mb-2 sm:mb-0">
            <input
              type="radio"
              name="accountType"
              checked={accountType === "resident"}
              onChange={() => handleAccountTypeChange("resident")}
              className="mr-1 sm:mr-2 h-4 w-4"
            />
            <span className="text-sm sm:text-base">Resident</span>
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="accountType"
              checked={accountType === "serviceTeam"}
              onChange={() => handleAccountTypeChange("serviceTeam")}
              className="mr-1 sm:mr-2 h-4 w-4"
            />
            <span className="text-sm sm:text-base">Service Team</span>
          </label>
        </div>
      </div>
    );
  }