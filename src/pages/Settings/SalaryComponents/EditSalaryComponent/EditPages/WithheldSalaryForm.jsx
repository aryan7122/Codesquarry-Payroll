import React, { useState } from "react";
import "../../AddNewSalaryComponent/EarningsSalaryForm.scss";
import { CiCircleInfo } from "react-icons/ci";
import PageTips from "../../PageTips/PageTips";

const WithheldSalaryForm = ({ showPopup, setShowPopup }) => {
    const [formData, setFormData] = useState({
        earningType: "Withheld Salaryn",
        earningName: "Withheld Salary",
        nameInPayslip: "Withheld Salary",
        calculationType: "Withheld Salary",
        // percentage: "",
        // isActive: false,
        // taxable: true,
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
        title: "Deduction",
        content: [
            {
                heading: "What is Deduction?",
                text: "A deduction is money taken out of an employee's pay after income tax is calculated and withheld. This has no effect on the taxable income."
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
                        <label>Deduction frequency <span>*</span></label>
                        <select name="calculationType" value={formData.calculationType} onChange={handleChange}>
                            <option value="Flat Amount">Flat Amount</option>
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
                    <p>Once you associate this deduction with an employee, you will only be able to edit the Name in Payslip. The change will be reflected in both new and existing employees.</p>
                </div>


            </form>
        </div>
    );
};

export default WithheldSalaryForm;
