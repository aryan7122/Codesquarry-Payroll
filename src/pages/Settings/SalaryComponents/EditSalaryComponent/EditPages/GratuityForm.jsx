import React, { useState } from "react";
import "../../AddNewSalaryComponent/EarningsSalaryForm.scss";
import { CiCircleInfo } from "react-icons/ci";
import PageTips from "../../PageTips/PageTips";

const GratuityForm = ({ showPopup, setShowPopup }) => {
    const [formData, setFormData] = useState({
        earningType: "Gratuity",
        earningName: "Gratuity",
        nameInPayslip: "Gratuity",
        // calculationType: "Flat Amount",
        // percentage: "",
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
        title: "Gratuity",
        content: [
            {
                heading: "What is Gratuity?",
                text: "An employer can give gratuity to retiring or resigning employees for the services they provided during employment."
            },
            {
                heading: "What are the conditions to receive gratuity?",
                text: "A person is eligible to receive gratuity only if they have completed a minimum of 5 years of service with an organisation. However, it can be paid before the completion of five years if the employee dies or if they’ve become disabled due to accident or disease.",
            },
            {
                heading: "How is it calculated?",
                list: [
                    'Employees covered under Gratuity Act: (15 x last drawn salary x tenure of working) divided by 26',
                    'Employees not covered under Gratuity Act: (15 x last drawn salary x tenure of working) divided by 30',
                ]
            },
            {
                heading: "What are the tax exemption rules?",
                list: [
                    'Gratuity received by Government employees is fully exempt from taxes.',
                    'For non - government employees who come under Gratuity Act, 15 days salary as per last drawn salary is exempt from taxes.',
                    {
                        text: "For non-government employees not under Gratuity Act, the least of the following three amounts is exempt from taxes:",
                        nestedList: [
                            "Actual gratuity amount received by employee",
                            "Half a month's salary for every year of service that the employee has completed with the employer"
                        ]
                    }
                ]
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

export default GratuityForm;
