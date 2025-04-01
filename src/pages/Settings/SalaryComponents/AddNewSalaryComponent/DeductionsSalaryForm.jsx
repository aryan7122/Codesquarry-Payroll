import React, { useState } from "react";
import "./EarningsSalaryForm.scss";

const DeductionsSalaryForm = () => {
    const [formData, setFormData] = useState({
        nameInPayslip: "",
        deductionFrequency:''
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data:", formData);
    };

    return (
        <div className="salary-form">
            <form onSubmit={handleSubmit}>
                <div className="form-row">
                    <div className="form-group">
                        <label>Name In Payslip <span>*</span></label>
                        <input
                            type="text"
                            name="nameInPayslip"
                            placeholder="Enter Name in payslip"
                            value={formData.nameInPayslip}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Calculation Type</label>
                        <select name="calculationType" value={formData.calculationType} onChange={handleChange}>
                            <option value="Percentage of CTC">Percentage of CTC</option>
                            <option value="Fixed Amount">Fixed Amount</option>
                        </select>
                    </div>
                </div>
                

               
                <div className="form-row">
                    <div className="form-group">
                        <div className="checkBox">
                            <input
                                type="checkbox"
                                name="isActive"
                                checked={formData.isActive}
                                onChange={handleChange}
                            />
                            <label>Mark This as Active</label>
                        </div>
                    </div>
                    <div className="form-group">
                    </div>
                </div>
               

                <div className="note">
                    <p>
Note: Once you associate this deduction with an employee, you will only be able to edit the Name in Payslip. The change will be reflected in both new and existing employees.                    </p>
                </div>


            </form>
        </div>
    );
};

export default DeductionsSalaryForm;
