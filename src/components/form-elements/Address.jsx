import React, { useContext } from "react";
import { DataContext } from "../services/DataService";
import { Input, Checkbox, Card } from "antd";

const { TextArea } = Input;

export const Address = () => {
  const {
    permanentAddress,
    setPermanentAddress,
    permanentPin,
    setPermanentPin,
    currentAddress,
    setCurrentAddress,
    currentPin,
    setCurrentPin,
    isAddressSame,
    toggleSameAddress,
  } = useContext(DataContext);

  return (
    <Card>
      <div className="label">Permanent Address</div>
      <TextArea value={permanentAddress} onChange={setPermanentAddress} />

      <div className="label">Pin</div>

      <Input
        value={permanentPin}
        onChange={setPermanentPin}
        type="number"
        placeholder="688582"
      />

      <Checkbox checked={isAddressSame} onChange={toggleSameAddress}>
        Same as permanent address
      </Checkbox>

      <div className="label">
        Address to which communications are to be sent
      </div>

      <TextArea
        value={isAddressSame ? permanentAddress : currentAddress}
        onChange={setCurrentAddress}
        disabled={isAddressSame}
      />

      <div className="label">Pin</div>
      <Input
        value={isAddressSame ? permanentPin : currentPin}
        onChange={setCurrentPin}
        disabled={isAddressSame}
        type="number"
        placeholder="688582"
      />
    </Card>
  );
};
