import React, { useState } from "react";
import "./EarningsSalaryForm.scss";

const ReimbursementSalaryForm = () => {
    const [formData, setFormData] = useState({
        ReimbursementType: "",
        amount: "",
        nameInPayslip: "",
        isActive: false,
        taxable: true,
        taxableEarning: true,
        epf: true,
        esi: true,
        showInPayslip: true,
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
                        <label>Reimbursement Type <span>*</span></label>
                        <select name="ReimbursementType" value={formData.ReimbursementType} onChange={handleChange}>
                            <option value="">Select earning type</option>
                            <option value="bonus">Bonus</option>
                            <option value="allowance">Allowance</option>
                        </select>
                    </div>
                    <div className="form-group">
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
                    </div>
                </div>
                <div className="form-row">

                    <div className="form-group">
                        <label>Amount </label>
                        <input
                            type="text"
                            name="amount"
                            placeholder="Enter Earning name"
                            value={formData.amount}
                            onChange={handleChange}
                        />
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
                <div className="configurations">
                    <div className="itemCheck">
                        <div className="left">

                            <div className="checkbox-container_2">
                                <div className="checkbox_label">
                                    <input
                                        type="checkbox"
                                        name="taxableEarning"
                                        checked={formData.taxableEarning}
                                        onChange={handleChange}
                                        disabled
                                    />
                                    <div className="">
                                        <label>Include this as a Flexible Benefit Plan component</label>
                                    </div>
                                </div>
                                <p className="label_p">FBP allows your employees to personalise their salary structure by choosing how much they want to receive under each FBP component.</p>
                            </div>

                        </div>
                        <div className="right">

                            <div className="checkbox-container_2">
                                <h4>How do you want to handle unclaimed reimbursement?</h4>
                                <div className="checkbox_label">
                                    <input
                                        type="radio"
                                        name="taxableEarning"
                                        checked={formData.taxableEarning}
                                        onChange={handleChange}
                                        style={{ marginTop: "2px" }}

                                    />
                                    <div className="" style={{ marginBottom: "4px" }}>
                                        <label>Include this as a Flexible Benefit Plan component</label>
                                    </div>
                                </div>
                                <div className="checkbox_label">
                                    <input
                                        type="radio"
                                        name="taxableEarning"
                                        checked={formData.taxableEarning}
                                        onChange={handleChange}
                                        style={{ marginTop: "4px" }}
                                    />
                                    <div className="">
                                        <label>Include this as a Flexible Benefit Plan component</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="note">
                    <p>Note: Once you associate this deduction with an employee, you will only be able to edit the Name in Payslip. The change will be reflected in both new and existing employees.</p>
                </div>


            </form>
        </div>
    );
};

export default ReimbursementSalaryForm;
