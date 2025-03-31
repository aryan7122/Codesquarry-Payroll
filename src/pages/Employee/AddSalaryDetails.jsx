import { useNavigate, useSearchParams } from "react-router-dom";
import { useState } from "react";
import "./AddSalaryDetails.scss"; // Import SCSS file
import { IoMdCloseCircleOutline } from "react-icons/io";
import { RiLightbulbFlashLine } from "react-icons/ri";

const AddSalaryDetails = () => {

    // const handleChange = (e) => {
    //     setFormData({ ...formData, [e.target.name]: e.target.value });
    // };
    const navigate = useNavigate();

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

    return (
        <div className="salary-components">
            <div className="header">
                <h2>Add Salary Details</h2>
                <div className="right_">
                    {/* <div className="tip">
                        <RiLightbulbFlashLine />
                        <p>Page Tips</p>
                    </div> */}
                    <button className="close" onClick={() => navigate("/employee/salary-components")}>
                        <IoMdCloseCircleOutline />
                    </button>
                </div>
            </div>
            <div className="form-container">
                {/* Common Fields */}
                <div className="salary-form">
                    <form onSubmit={handleSubmit}>
                        <div className="form-row">
                            <div className="form-group">
                                <label>Earning Type <span>*</span></label>
                                <select name="earningType" value={formData.earningType} onChange={handleChange}>
                                    <option value="">Select earning type</option>
                                    <option value="bonus">Bonus</option>
                                    <option value="allowance">Allowance</option>
                                </select>
                            </div>
                            <div className="form-group">

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
                                <label>Percentage</label>
                                <input
                                    type="number"
                                    name="percentage"
                                    placeholder="Enter percentage"
                                    value={formData.percentage}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                    </form>
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

export default AddSalaryDetails;
