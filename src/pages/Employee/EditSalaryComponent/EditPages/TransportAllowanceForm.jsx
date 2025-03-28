import React, { useState } from "react";
import "../../AddNewSalaryComponent/EarningsSalaryForm.scss";
import { CiCircleInfo } from "react-icons/ci";
import PageTips from "../../PageTips/PageTips";

const TransportAllowanceForm = ({ showPopup, setShowPopup }) => {
    const [formData, setFormData] = useState({
        earningType: "Transport Allowance",
        earningName: "Transport Allowance",
        nameInPayslip: "Transport Allowance",
        calculationType: "Flat Amount",
        percentage: "",
        isActive: false,
        taxable: true,
        taxableEarning: true,
        epf: true,
        esi: true,
        fbp: false,
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
        title: "Transport Allowance",
        content: [
            {
                heading: "What is Transport Allowance?",
                text: "Transport Allowance is paid to employees to compensate them for travel costs while travelling between their residence and their workplace. Generally, an employer pays transport allowance only if they don’t provide transportation to employees. There is no limit on the amount of transport allowance a company can offer to its employees."
            },
            {
                heading: "Is it exempt from Income Tax?",
                text: "No, Transport Allowance is fully taxable."
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
                        <label>Earning Type <span>*</span></label>
                        <input
                            type="text"
                            name="earningName"
                            placeholder="Conveyance Allowance"
                            value={formData.earningType}
                            onChange={handleChange}
                            disabled
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
                            placeholder="Conveyance Allowance"
                            value={formData.earningName}
                            onChange={handleChange}
                        />
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
                        <label>Calculation Type</label>
                        <select name="calculationType" value={formData.calculationType} onChange={handleChange}>
                            <option value="Flat Amount">Flat Amount</option>
                            <option value="Percentage of CTC">Percentage of CTC</option>
                            <option value="Fixed Amount">Fixed Amount</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label>Amount</label>
                        <input
                            type="number"
                            name="percentage"
                            placeholder="Enter Amount"
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
                            <div className="checkbox-container" >
                                <input
                                    type="checkbox"
                                    name="esi"
                                    checked={formData.esi}
                                    onChange={handleChange}
                                    disabled
                                />
                                <label>Make this earning a part of the employee’s salary structure</label>
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
                            <div className="checkbox-container_2" >
                                <div className="checkbox_label">
                                    <input
                                        type="checkbox"
                                        name="taxableEarning"
                                        checked={formData.fbp}
                                        onChange={handleChange}
                                        disabled
                                    />
                                    <div className="">
                                        <label>Include this as a Flexible Benefit Plan component</label>
                                    </div>
                                </div>
                                <p className="label_p">
                                    FBP allows your employees to personalise their salary structure by choosing how much they want to receive under each FBP component.
                                </p>
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
                                        <label>Consider for EPF Contribution</label>
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
                                                <label>Always</label>
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
                                                <label>Only when PF Wage is less than ₹ 15,000 </label>
                                            </div>
                                        </div>
                                    </div>
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

export default TransportAllowanceForm;
