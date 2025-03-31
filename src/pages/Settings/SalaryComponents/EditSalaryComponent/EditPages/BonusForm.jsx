import React, { useState } from "react";
import "../../AddNewSalaryComponent/EarningsSalaryForm.scss";
import { CiCircleInfo } from "react-icons/ci";
import PageTips from "../../PageTips/PageTips";

const BonusForm = ({ showPopup, setShowPopup }) => {
    const [formData, setFormData] = useState({
        earningType: "Bonus",
        earningName: "Bonus",
        nameInPayslip: "Bonus",
        // calculationType: "Percentage of CTC",
        // percentage: "",
        isActive: false,
        taxable: true,
        taxableEarning: false,
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
    const [infoShow, setInfoShow] = useState(false)


    const popupData = {
        title: "Bonus",
        content: [
            {
                heading: "What is Bonus?",
                text: "Bonus is a financial compensation provided to an employee to reward outstanding performance."
            },
            {
                heading: "What are the eligibility criteria for providing bonus?",
                text: "Every employee receiving wages less than or equal to ₹10,000 per month, who has worked for a minimum of 30 days in a financial year, is eligible for a bonus of a minimum of 8.33% of their annual salary even if your organisation has incurred a loss. A maximum of 20% of the employee’s salary or wages can be paid as bonus in a financial year."
            },
            {
                heading: "Is it exempt from Income Tax?",
                text: "No, Basic is fully taxable."
            }
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
                        <label>Earning Type <span>*</span></label>
                        <input
                            type="text"
                            name="earningName"
                            placeholder="House Rent Allowance"
                            value={formData.earningName}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <CiCircleInfo onClick={() => setInfoShow(!infoShow)} />
                        {infoShow &&
                            <div className="info_text">
                                Fixed amount paid at the end of every month.
                            </div>
                        }
                    </div>
                </div>
                <div className="form-row">

                    <div className="form-group">
                        <label>Earning Name <span>*</span></label>
                        <input
                            type="text"
                            name="earningName"
                            placeholder="House Rent Allowance"
                            value={formData.earningName}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label>Name In Payslip <span>*</span></label>
                        <input
                            type="text"
                            name="nameInPayslip"
                            placeholder="House Rent Allowance"
                            value={formData.nameInPayslip}
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
                    <h3>Other Configurations</h3>
                    <div className="itemCheck">
                        <div className="left">
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
                                        <label>Make this earning a part of the employee’s salary structure</label>
                                    </div>
                                </div>
                            </div>
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
                                        <label>This is a taxable earning</label>
                                    </div>
                                </div>
                                
                            </div>
                            <div className="checkbox-container_2" >
                                <div className="checkbox_label">
                                    <h4 style={{marginTop:"10px",marginBottom:"-1px"}}>Tax Deduction Preference*</h4>
                                </div>
                                <div className="checkbox-container_2">
                                    <div className="checkbox_label left_radio2">
                                        <input
                                            type="radio"
                                            name="taxableEarning"
                                            checked={formData.taxableEarning}
                                            onChange={handleChange}
                                            style={{ marginTop: "2px" }}
                                            disabled
                                        />
                                        <div className="" style={{ marginBottom: "4px" }}>
                                            <label>Always</label>
                                        </div>
                                    </div>
                                    <div className="checkbox_label left_radio2">
                                        <input
                                            type="radio"
                                            name="taxableEarning"
                                            checked={formData.taxableEarning}
                                            onChange={handleChange}
                                            style={{ marginTop: "4px" }}
                                            disabled
                                        />
                                        <div className="">
                                            <label>Only when PF Wage is less than ₹ 15,000 </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="right">
                           
                            <div className="checkbox-container" >
                                <input
                                    type="checkbox"
                                    name="esi"
                                    checked={formData.esi}
                                    onChange={handleChange}
                                    disabled
                                />
                                <label>Consider for ESI Contribution</label>
                            </div>
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
                                        <label>Consider for EPF Contribution</label>
                                    </div>
                                </div>
                                <div>
                                    
                                </div>
                            </div>

                            <div className="checkbox-container">
                                <input
                                    type="checkbox"
                                    name="showInPayslip"
                                    checked={formData.showInPayslip}
                                    onChange={handleChange}
                                    disabled
                                />
                                <label>Show this component in payslip</label>
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

export default BonusForm;
