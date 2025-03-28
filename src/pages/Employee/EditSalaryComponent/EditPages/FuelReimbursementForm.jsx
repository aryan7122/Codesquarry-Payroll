import React, { useState } from "react";
import "../../AddNewSalaryComponent/EarningsSalaryForm.scss";
import { CiCircleInfo } from "react-icons/ci";
import PageTips from "../../PageTips/PageTips";

const FuelReimbursementForm = ({ showPopup, setShowPopup }) => {
    const [formData, setFormData] = useState({
        Reimbursement: "Fuel Reimbursement",
        Amount: "",
        nameInPayslip: "Fuel Reimbursement",
        calculationType: "Voluntary Provident Fund",
        // percentage: "",
        isActive: false,
        Calculate: true,
        // taxableEarning: true,
        // epf: true,
        // esi: false,
        // fbp: false,
        // showInPayslip: true,
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
    const [infoShow, setInfoShow] = useState(false)


    const popupData = {
        title: "Fuel Reimbur",
        content: [
            {
                heading: "What is Fuel Reimbursement?",
                text: "Fuel reimbursement is provided to employees to cover costs associated with using a vehicle for business purposes."
            },
            {
                heading: "What are the guidelines to avail Fuel Reimbursement?",
                text: "If the employee uses the vehicle only for official purposes, the entire amount spent on fuel and maintenance is tax exempted, provided the employer maintains detailed records of expenses and mileage."
            },
            {
                text: "If the employee uses the vehicle only for personal purposes, the entire amount reimbursed as fuel reimbursements is taxable."
            },
            
        ]
    };

    return (
        <div className="salary-form">
            {showPopup && (
                <PageTips
                    title={popupData.title}
                    content={popupData.content}
                    onClose={() => setShowPopup(false)}
                />
            )}
            <form onSubmit={handleSubmit}>
               
                <div className="form-row">
                    <div className="form-group">
                        <label>Reimbursement Type</label>
                        <select name="calculationType" value={formData.Reimbursement} onChange={handleChange}>
                            <option value="Flat Amount">Flat Amount</option>
                            <option value="Percentage of CTC">Percentage of CTC</option>
                            <option value="Fixed Amount">Fixed Amount</option>
                        </select>
                    </div>
                   
                    <div className="form-group">
                        <label>Name In Payslip <span>*</span></label>
                        <input
                            type="text"
                            name="nameInPayslip"
                            placeholder=""
                            value={formData.nameInPayslip}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Amount<span>*</span></label>
                        <input
                            type="text"
                            name="Amount"
                            placeholder="Enter the amount"
                            value={formData.Amount}
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
                           
                            <div className="checkbox-container_2" >
                                <div className="checkbox_label">
                                    <input
                                        type="checkbox"
                                        name="taxableEarning"
                                        checked={formData.Calculate}
                                        onChange={handleChange}
                                        // disabled
                                    />
                                    <div className="">
                                        <label>Include this as a Flexible Benefit Plan component</label>
                                    </div>
                                </div>
                                <p className="label_p">FBP allows your employees to personalise their salary structure by choosing how much they want to receive under each FBP component.</p>

                            </div>
                          
                        </div>
                        <div className="right">



                            <div className="checkbox-container_2" >
                                <div className="checkbox_label">
                                    <input
                                        type="checkbox"
                                        name="taxableEarning"
                                        checked={formData.taxableEarning}
                                        onChange={handleChange}
                                        disabled
                                    />
                                    <div className="">
                                        <label>How do you want to handle unclaimed reimbursement?</label>
                                    </div>
                                </div>
                                <div>
                                    <div className="checkbox-container_2">
                                        <div className="checkbox_label left_radio">
                                            <input
                                                type="radio"
                                                name="taxableEarning"
                                                checked={formData.taxableEarning}
                                                onChange={handleChange}
                                                style={{ marginTop: "2px" }}
                                                disabled
                                            />
                                            <div className="" style={{ marginBottom: "4px" }}>
                                                <label>Encash unclaimed reimbursement at the end of each financial year</label>
                                            </div>
                                        </div>
                                        <div className="checkbox_label left_radio">
                                            <input
                                                type="radio"
                                                name="taxableEarning"
                                                checked={formData.taxableEarning}
                                                onChange={handleChange}
                                                style={{ marginTop: "4px" }}
                                                disabled
                                            />
                                            <div className="">
                                                <label>Do not carry forward and encash unclaimed reimbursements monthly </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                           
                        </div>
                      
                    </div>

                </div>

                <div className="note">
                    <p>Note: Once you associate this component with an employee, you will only be able to edit the Name in Payslip and Amount. The changes you make to Amount will apply only to new employees.</p>
                </div>


            </form>
        </div>
    );
};

export default FuelReimbursementForm;
