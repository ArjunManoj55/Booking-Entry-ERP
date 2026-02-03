import { useState } from "react";
import {
  validateSenderInfo,
  validateReceiverInfo,
  validatePackageInfo,
} from "../utils/validation";

export function useBookingForm() {
  // States
  const [senderDetails, setSenderDetails] = useState({
    fullName: "",
    mobileNumber: "",
    email: "",
  });

  const [receiverDetails, setReceiverDetails] = useState({
    fullName: "",
    address: "",
  });

  const [packageDetails, setPackageDetails] = useState({
    weight: "",
    perKg: "",
  });

  const [totalCost, setTotalCost] = useState(0);

  const [error, setError] = useState({
    sender: {},
    receiver: {},
    package: {},
  });

  const [loading, setLoading] = useState(false);
  const [output, setOutput] = useState("");

  // ------------------- Handlers -------------------

  //sender handler
  const onChangeSenderHandler = (e) => {
    const { name, value } = e.target;
    setSenderDetails((prev) => ({ ...prev, [name]: value }));

    setError((prev) => ({
      ...prev,
      sender: { ...prev.sender, [name]: validateSenderInfo(name, value) },
    }));
  };

  //receiver handler
  const onChangeReceiverHandler = (e) => {
    const { name, value } = e.target;
    setReceiverDetails((prev) => ({ ...prev, [name]: value }));

    setError((prev) => ({
      ...prev,
      receiver: { ...prev.receiver, [name]: validateReceiverInfo(name, value) },
    }));
  };

  //package handler
  const onChangePackageHandler = (e) => {
    const { name, value } = e.target;
    const updated = { ...packageDetails, [name]: value };
    setPackageDetails(updated);

    const weight = Number(updated.weight || 0);
    const perKg = Number(updated.perKg || 0);
    setTotalCost(weight * perKg);

    setError((prev) => ({
      ...prev,
      package: { ...prev.package, [name]: validatePackageInfo(name, value) },
    }));
  };

  //button checks
  const isFormInvalid =
    Object.values(error.sender).some(Boolean) ||
    Object.values(error.receiver).some(Boolean) ||
    Object.values(error.package).some(Boolean) ||
    !senderDetails.fullName ||
    !senderDetails.mobileNumber ||
    // !senderDetails.email || (optional)
    !receiverDetails.fullName ||
    !receiverDetails.address ||
    !packageDetails.weight ||
    !packageDetails.perKg;

  const fakeApiCall = () =>
    new Promise((resolve) =>
      setTimeout(() => resolve({ success: true }), 1000),
    );

  const onClickHandler = async () => {
    if (isFormInvalid) return;

    setLoading(true);
    try {
      const response = await fakeApiCall();

      if (response.success) {
        const finalData = {
          sender: senderDetails,
          receiver: receiverDetails,
          package: { ...packageDetails, totalCost },
          timestamp: new Date().toISOString(),
        };

        setOutput(JSON.stringify(finalData, null, 2));
        alert("Booking Successful");
      }
    } catch (err) {
      console.error("API error:", err);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return {
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
  };
}
