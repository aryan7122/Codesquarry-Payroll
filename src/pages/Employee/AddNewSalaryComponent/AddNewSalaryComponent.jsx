import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import "./AddNewSalaryComponent.scss"; // Import SCSS file

const AddNewSalaryComponent = () => {
    const [searchParams] = useSearchParams();
    const type = searchParams.get("type"); // Get the type from URL
    console.log('searchParams', type)
    const [formData, setFormData] = useState({});

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="salary-components">
            <h2>{type === "Earnings" ? "New Earning" :
                type === "Deductions" ? "New Deduction" :
                    type === "Benefits" ? "New Benefit" : "New Reimbursement"}</h2>

            <div className="form-container">
                {/* Common Fields */}
                <div className="form-group">
                    <label>Name in Payslip*</label>
                    <input type="text" name="name" onChange={handleChange} required />
                </div>

                {/* Conditional Fields Based on Type */}
                {type === "Earnings" && (
                    <>
                        <div className="form-group">
                            <label>Earning Type</label>
                            <select name="earningType" onChange={handleChange}>
                                <option>Select earning type</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Calculation Type</label>
                            <select name="calculationType" onChange={handleChange}>
                                <option>Percentage of CTC</option>
                            </select>
                        </div>
                    </>
                )}

                {type === "Deductions" && (
                    <div className="form-group">
                        <label>Deduction Frequency</label>
                        <select name="deductionFrequency" onChange={handleChange}>
                            <option>Select deduction frequency</option>
                        </select>
                    </div>
                )}

                {type === "Benefits" && (
                    <>
                        <div className="form-group">
                            <label>Benefit Plan*</label>
                            <select name="benefitPlan" onChange={handleChange}>
                                <option>Select benefit plan</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Associate This Benefit With</label>
                            <select name="associateBenefitWith" onChange={handleChange}>
                                <option>Select the deduction frequency</option>
                            </select>
                        </div>
                    </>
                )}

                {type === "Reimbursements" && (
                    <>
                        <div className="form-group">
                            <label>Reimbursement Type</label>
                            <select name="reimbursementType" onChange={handleChange}>
                                <option>Select reimbursement type</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Amount</label>
                            <input type="number" name="amount" onChange={handleChange} />
                        </div>
                    </>
                )}

                {/* Note */}
                <div className="note">
                    Note: Once you associate this deduction with an employee, you will only be able to edit the Name in Payslip. The change will be reflected in both new and existing employees.
                </div>

                {/* Buttons */}
                <div className="actions">
                    <button className="save">Save</button>
                    <button className="cancel">Cancel</button>
                </div>
            </div>
        </div>
    );
};

export default AddNewSalaryComponent;
