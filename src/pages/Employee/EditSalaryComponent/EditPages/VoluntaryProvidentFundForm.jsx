import React, { useState } from "react";
import "../../AddNewSalaryComponent/EarningsSalaryForm.scss";
import { CiCircleInfo } from "react-icons/ci";
import PageTips from "../../PageTips/PageTips";

const VoluntaryProvidentFundForm = ({ showPopup, setShowPopup }) => {
    const [formData, setFormData] = useState({
        athbw: "Select an investment",
        earningName: "Notice Pay Deduction",
        nameInPayslip: "Voluntary Provident Fund",
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
        title: "Benefit",
        content: [
            {
                heading: "What is Benefit?",
                text: "A benefit is money taken out of an employee's pay before income tax is calculated. This helps reduce the taxable income. Some of the common benefits are NPS, VPF and Medical Insurance."
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
                        <label>Benefit Plan <span>*</span></label>
                        <select name="calculationType" value={formData.calculationType} onChange={handleChange}>
                            <option value="Flat Amount">Flat Amount</option>
                            <option value="Percentage of CTC">Percentage of CTC</option>
                            <option value="Fixed Amount">Fixed Amount</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Associate this benefit with</label>
                        <select name="calculationType" value={formData.athbw} onChange={handleChange}>
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
                                        <label>Calculate on pro-rata basis</label>
                                    </div>
                                </div>
                                <p className="label_p">Pay will be adjusted based on employee working days.</p>

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

export default VoluntaryProvidentFundForm;
