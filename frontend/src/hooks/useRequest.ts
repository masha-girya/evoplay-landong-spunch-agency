import { useEffect, useState } from "react";
import { sendRequest } from "src/services/api";
import { REQ_STATUS } from "src/services/api-types";
import { emailValidation } from "src/services/validation";

export const useRequest = () => {
  const [type, setType] = useState<"Service" | "Vacancy">("Service");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<REQ_STATUS>(REQ_STATUS.none);

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const isValidName = name.trim().length > 0;
    const isValidEmail = emailValidation(email);

    if (!isValidName || !isValidEmail) {
      console.log({ isValidEmail, isValidName });
      setStatus(REQ_STATUS.lackData);
    }

    if (isValidName && isValidEmail) {
      setIsLoading(true);

      const reqData = {
        type,
        name,
        email,
      };

      const status = await sendRequest(reqData);
      setStatus(status.status);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (name.trim().length > 0) {
      setStatus(REQ_STATUS.none);
    }
  }, [name]);

  useEffect(() => {
    if (emailValidation(email)) {
      setStatus(REQ_STATUS.none);
    }
  }, [email]);

  useEffect(() => {
    if (status === REQ_STATUS.success) {
      setName("");
      setEmail("");
    }
  }, [status]);

  return {
    handleSubmit,
    type,
    setType,
    name,
    setName,
    email,
    setEmail,
    isLoading,
    status,
    setStatus,
  };
};
