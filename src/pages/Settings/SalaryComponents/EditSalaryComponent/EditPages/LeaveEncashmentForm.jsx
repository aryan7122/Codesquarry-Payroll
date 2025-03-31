import React, { useState } from "react";
import "../../AddNewSalaryComponent/EarningsSalaryForm.scss";
import { CiCircleInfo } from "react-icons/ci";
import PageTips from "../../PageTips/PageTips";

const LeaveEncashmentForm = ({ showPopup, setShowPopup }) => {
    const [formData, setFormData] = useState({
        earningType: "Leave Encashment",
        earningName: "Leave Encashment",
        nameInPayslip: "Leave Encashment",
        calculationType: "Flat Amount",
        percentage: "",
        isActive: false,
        taxable: true,
        taxableEarning: true,
        epf: true,
        esi: false,
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
        title: "Leave Encashment",
        content: [
            {
                heading: "What is Leave Encashment?",
                text: "Leave Encashment refers to the amount of money received in exchange for unused paid leave days. An employee can encash the accumulated leaves during their service or while leaving the job or at retirement."
            },
            {
                heading: "What are the tax exemption rules?",
                text: "Yes, Travelling Allowance is completely exempt from income tax.",
                list: [
                    "Leave encashment received during service is fully taxable.",
                    "Leave encashment received by Central or State Government employees is fully exempt from income tax.",
                    "Leave encashment received by legal heirs of deceased employee is fully exempt from income tax.",
                    "For non-government employees, tax exemption is provided for the lowest amount of the following:",
                    "Amount notified by the Government - ₹3,00,000",
                    "Actual leave encashment amount",
                    "Average salary of last 10 months",
                    "Salary per day * unutilised leave (considering maximum 30 days leave per year) for every year of completed service"
                ]
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
                                    // disabled
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
                                        <label>Consider for ESI Contribution</label>
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

                {/* <div className="note">
                    <p>Note: As you've already associated this component with one or more employees, you can only edit the Name and Amount/Percentage. The changes made to Amount/Percentage will apply only to new employees.</p>
                </div> */}


            </form>
        </div>
    );
};

export default LeaveEncashmentForm;
