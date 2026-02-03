import React from "react";
import SenderDetails from "../components/SenderDetails";
import ReceiverDetails from "../components/ReceiverDetails";
import PackageDetails from "../components/PackageDetails";
import Button from "../components/ui/Button";
import OutPut from "../components/OutPut";
import { useBookingForm } from "../hooks/useBookingForm";

function NewBooking() {
  const {
    senderDetails,
    receiverDetails,
    packageDetails,
    totalCost,
    error,
    loading,
    output,
    onChangeSenderHandler,
    onChangeReceiverHandler,
    onChangePackageHandler,
    onClickHandler,
    isFormInvalid,
  } = useBookingForm();

  return (
    <div className="p-4">
      

      <div className="flex flex-col sm:flex-row gap-4">
        <div className="w-full sm:w-1/2">
          <SenderDetails
            senderDetails={senderDetails}
            onChange={onChangeSenderHandler}
            error={error.sender}
          />
        </div>

        <div className="w-full sm:w-1/2">
          <ReceiverDetails
            receiverDetails={receiverDetails}
            onChange={onChangeReceiverHandler}
            error={error.receiver}
          />
        </div>
      </div>

      <div className="mt-4 w-full">
        <PackageDetails
          packageDetails={packageDetails}
          onChange={onChangePackageHandler}
          error={error}
          totalCost={totalCost}
        />
      </div>

      <div className="mt-4 flex justify-center">
        <Button
          onClick={onClickHandler}
          loading={loading}
          disabled={isFormInvalid || loading}
        />
      </div>

      <div className="mt-4 flex justify-center">
        <OutPut output={output} />
      </div>
    </div>
  );
}

export default NewBooking;
