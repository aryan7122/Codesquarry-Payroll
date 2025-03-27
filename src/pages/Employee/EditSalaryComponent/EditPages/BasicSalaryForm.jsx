import React, { useState } from "react";
import "../../AddNewSalaryComponent/EarningsSalaryForm.scss";
import { CiCircleInfo } from "react-icons/ci";
import PageTips from "../../PageTips/PageTips";

const BasicSalaryForm = ({ showPopup, setShowPopup }) => {
    const [formData, setFormData] = useState({
        earningType: "",
        earningName: "",
        nameInPayslip: "",
        calculationType: "Percentage of CTC",
        percentage: "",
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
    const [infoShow, setInfoShow] = useState(false)


    const popupData = {
        title: "Basic",
        content: [
            {
                heading: "What is Basic?",
                text: "Basic is the primary component of an employee's salary. Other important components like Provident Fund (PF), Gratuity, Leave Travel Allowance and Bonus are calculated based on this amount."
            },
            {
                heading: "How is it calculated?",
                text: "It is usually set as 40-60% of the Cost to Company (CTC)."
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
                        <select name="earningType" value={formData.earningType} onChange={handleChange}>
                            <option value="">Basic</option>
                            <option value="bonus">Bonus</option>
                            <option value="allowance">Allowance</option>
                        </select>
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
                            placeholder="Enter Earning name"
                            value={formData.earningName}
                            onChange={handleChange}
                        />
                    </div>

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

                <div className="form-row">
                    <div className="form-group">
                        <label>Calculation Type</label>
                        <select name="calculationType" value={formData.calculationType} onChange={handleChange}>
                            <option value="Percentage of CTC">Percentage of CTC</option>
                            <option value="Fixed Amount">Fixed Amount</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label>Basic Percentage</label>
                        <input
                            type="number"
                            name="percentage"
                            placeholder="Enter percentage"
                            value={formData.percentage}
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
                                        <label>This is a taxable earning</label>
                                    </div>
                                </div>
                                <p className="label_p">The income tax amount will be divided equally and deducted every month across the financial year.</p>
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
                                        <label>Calculate on pro-rata basis</label>
                                    </div>
                                </div>
                                <p className="label_p">Pay will be adjusted based on employee working days.</p>
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
                                        <label>Make this earning a part of the employee’s salary structure</label>
                                    </div>
                                </div>
                            </div>
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

export default BasicSalaryForm;
