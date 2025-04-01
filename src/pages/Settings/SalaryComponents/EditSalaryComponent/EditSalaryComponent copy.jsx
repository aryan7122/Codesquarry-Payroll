import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import "./EditSalaryComponent.scss";
import { RiLightbulbFlashLine } from "react-icons/ri";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { CiCircleInfo } from "react-icons/ci";
import PageTips from "../PageTips/PageTips";

const EditSalaryComponent = () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const [infoShow, setInfoShow] = useState(false)
    const [formData, setFormData] = useState({
        type: "",
        name: "",
        nameInPayslip: "",
        amount: "",
        calculation: "",
        status: ""
    });

    useEffect(() => {
        setFormData({
            type: searchParams.get("type") || "",
            name: searchParams.get("name") || "",
            nameInPayslip: searchParams.get("name") || "",
            calculation: searchParams.get("calculation") || "",
            status: searchParams.get("status") || ""
        });
    }, [searchParams]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Updated Data:", formData);
        navigate("/employee/salary-components");
    };
    const [showPopup, setShowPopup] = useState(false);

    const popupData = {
        title: "Bonus",
        content: [
            {
                heading: "What is Bonus?",
                text: "Bonus is a financial compensation provided to an employee to reward outstanding performance."
            },
            {
                heading: "What are the eligibility criteria for providing bonus?",
                text: "Every employee receiving wages less than or equal to ₹10,000 per month is eligible for a bonus."
            },
            {
                heading: "Is it exempt from Income Tax?",
                text: "No, Bonus is fully taxable."
            }
        ]
    };
    return (
        <div className="edit-salary-container">
            <div className="header">
                <h2>Edit Salary</h2>
                <div className="right_">
                    <div className="tip" onClick={() => setShowPopup(true)}>
                        <RiLightbulbFlashLine />
                        <p>Page Tips</p>
                    </div>
                    <button className="close" onClick={() => navigate("/employee/salary-components")}>
                        <IoMdCloseCircleOutline />
                    </button>
                </div>
            </div>
            {showPopup && (
                <PageTips
                    title={popupData.title}
                    content={popupData.content}
                    onClose={() => setShowPopup(false)}
                />
            )}
            <form className="form_edit_salary_container" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Earning Type*</label>
                    <input type="text" name="type" value={formData.type} disabled className="input-field" />
                </div>
                <div className="form-group">
                    <CiCircleInfo onClick={() => setInfoShow(!infoShow)} />
                    {infoShow &&
                        <div className="info_text">
                            Fixed amount paid at the end of every month.
                        </div>
                    }
                </div>

                <div className="form-group">
                    <label>Earning Name*</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} className="input-field" />
                </div>
                <div className="form-group">
                    <label>Name In Payslip*</label>
                    <input type="text" name="nameInPayslip" value={formData.nameInPayslip} onChange={handleChange} className="input-field" />
                </div>

                <div className="form-group">
                    <label>Calculation Type*</label>
                    <input type="text" name="calculation" value={formData.calculation} onChange={handleChange} className="input-field" />
                </div>
                {formData.calculation.length > 1 &&
                    <div className="form-group">
                        <label>Amount</label>
                        <input type="text" name="amount" value={formData.amount} onChange={handleChange} className="input-field" />
                    </div>
                }

                <div className="checkbox-group">
                    <input type="checkbox" id="status" checked={formData.status === "Active"} onChange={() => setFormData({ ...formData, status: formData.status === "Active" ? "Inactive" : "Active" })} />
                    <label htmlFor="status">Mark This as Active</label>
                </div>
                <div></div>

                <div className="other-configs">
                    <h3>Other Configurations</h3>
                    <div className="grid_check">
                        <div className="checkbox-group">
                            <input type="checkbox" id="taxable" />
                            <label htmlFor="taxable">This is a taxable earning</label>
                        </div>
                        <div className="checkbox-group">
                            <input type="checkbox" id="pro-rata" />
                            <label htmlFor="pro-rata">Calculate on pro-rata basis</label>
                        </div>
                        <div className="checkbox-group">
                            <input type="checkbox" id="salary-structure" />
                            <label htmlFor="salary-structure">Make this earning a part of the employee’s salary structure</label>
                        </div>
                        <div className="checkbox-group">
                            <input type="checkbox" id="esi-contribution" />
                            <label htmlFor="esi-contribution">Consider for ESI Contribution</label>
                        </div>
                        <div className="checkbox-group">
                            <input type="checkbox" id="show-payslip" />
                            <label htmlFor="show-payslip">Show this component in payslip</label>
                        </div>
                    </div>
                </div>

                <div className="alert-message">
                    <p>Note: As you’ve already associated this component with one or more employees, you can only edit the Name and Amount/Percentage. The changes made to Amount/Percentage will apply only to new employees.</p>
                </div>

                <div className="button-group">
                    <button type="submit" className="save-btn">Save</button>
                    <button type="button" className="cancel-btn" onClick={() => navigate("/employee/salary-components")}>Cancel</button>
                </div>
            </form>
        </div>
    );
};

export default EditSalaryComponent;
