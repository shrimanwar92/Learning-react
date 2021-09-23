import React, {useState} from "react";
import CustomDropdown from "../Shared/CustomDropdown/Custom-dropdown";
import './Order.css';
import {areas, divisions, agents, customers, awardedTo, trips} from "../../Mocks";

export default function Order() {
    const [orderData, setOrderData] = useState({
        area: areas[0].id,
        division: divisions[0].id,
        agent: agents[0].id,
        customer: customers[0].id,
        awardedTo: awardedTo[0].id,
        tripType: trips[0].id
    })
    const handleDropdownValueChange = (value) => {
        setOrderData({ ...orderData, ...value });
    };

    return(
        <div>
            <div className="order__container">
                <label className="order__label">Order</label>
                <div className="order__details">
                    <CustomDropdown label="Area" name="area" items={areas} onChange={handleDropdownValueChange} />
                    <CustomDropdown label="Division" name="division" items={divisions} onChange={handleDropdownValueChange} />
                    <CustomDropdown label="Agent" name="agent" items={agents} onChange={handleDropdownValueChange} />
                    <CustomDropdown label="Customer" name="customer" items={customers} onChange={handleDropdownValueChange} />
                    <CustomDropdown label="Awarded to" name="awardedTo" items={awardedTo} onChange={handleDropdownValueChange} />
                </div>
            </div>
            <div className="order__container">
                <label className="order__label">Trip</label>
                <div className="order__details">
                    <CustomDropdown label="Trip type" items={trips} name="tripType" onChange={handleDropdownValueChange} />
                </div>
            </div>

            <div><pre>{ JSON.stringify(orderData, null, 2) }</pre></div>

        </div>
    );
}