import React, { useState } from "react";
import "./EarningsSalaryForm.scss";

const BenefitsSalaryForm = () => {
    const [formData, setFormData] = useState({
        nameInPayslip: "",
        benefitPlan: "",
        associateBenefit: "",
        isActive: false,
        calculate: false,
        epf: false,
        taxableEarning: false
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
                        <label>Benefit Plan* <span>*</span></label>
                        <select name="benefitPlan" value={formData.benefitPlan} onChange={handleChange}>
                            <option value="">Select benefit plan</option>
                            <option value="bonus">Bonus</option>
                            <option value="allowance">Allowance</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Associate this benefit with</label>
                        <select name="associateBenefit" value={formData.associateBenefit} onChange={handleChange}>
                            <option value="">Select the deduction frequency</option>
                            <option value="bonus">Bonus</option>
                            <option value="allowance">Allowance</option>
                        </select>
                    </div>
                </div>
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
                            <div className="checkbox-container">
                                <input
                                    type="checkbox"
                                    name="calculate"
                                    checked={formData.calculate}
                                    onChange={handleChange}
                                />
                                <label>Calculate on pro-rata basis</label>
                            </div>

                            <div className="checkbox-container">
                                <input
                                    type="checkbox"
                                    name="epf"
                                    checked={formData.epf}
                                    onChange={handleChange}

                                />
                                <label>Include this as a Flexible Benefit Plan component</label>
                            </div>

                            <div className="checkbox-container_2">
                                <div className="checkbox_label">
                                    <input
                                        type="checkbox"
                                        name="taxableEarning"
                                        checked={formData.taxableEarning}
                                        onChange={handleChange}

                                    />
                                    <div className="">
                                        <label>Consider this a superannuation fund</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="note">
                    <p>Note: As you've already associated this component with one or more employees, you can only edit the Name and Amount/Percentage. The changes made to Amount/Percentage will apply only to new employees.</p>
                </div>


            </form>
        </div>
    );
};

export default BenefitsSalaryForm;
