import { useNavigate, useSearchParams } from "react-router-dom";
import { useState } from "react";
import "./AddNewSalaryComponent.scss"; // Import SCSS file
import { IoMdCloseCircleOutline } from "react-icons/io";
import { RiLightbulbFlashLine } from "react-icons/ri";
import EarningsSalaryForm from "./EarningsSalaryForm";
import DeductionsSalaryForm from "./DeductionsSalaryForm";
import BenefitsSalaryForm from "./BenefitsSalaryForm";
import ReimbursementSalaryForm from "./ReimbursementSalaryForm";

const AddNewSalaryComponent = () => {
    const [searchParams] = useSearchParams();
    const type = searchParams.get("type"); // Get the type from URL
    console.log('searchParams', type)
    const [formData, setFormData] = useState({});

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const navigate = useNavigate();

    return (
        <div className="salary-components">
           
            <div className="header">
                <h2>{type === "Earnings" ? "New Earning" :
                    type === "Deductions" ? "New Deduction" :
                        type === "Benefits" ? "New Benefit" : "New Reimbursement"}</h2>
                <div className="right_">
                    <div className="tip">
                        <RiLightbulbFlashLine />
                        <p>Page Tips</p>
                    </div>
                    <button className="close" onClick={() => navigate("/settings/salary-components")}>
                        <IoMdCloseCircleOutline />
                    </button>
                </div>
            </div>
            <div className="form-container">
                {/* Common Fields */}
              

                {/* Conditional Fields Based on Type */}
                {type === "Earnings" && (
                    <>
                        <EarningsSalaryForm/>
                    </>
                )}

                {type === "Deductions" && (
                    <>
                        <DeductionsSalaryForm/>
                   </>
                )}

                {type === "Benefits" && (
                    <>
                        <BenefitsSalaryForm/>
                    </>
                )}

                {type === "Reimbursements" && (
                    <>
                        <ReimbursementSalaryForm/>
                    </>
                )}

                

                {/* Buttons */}
                <div className="actions">
                    <button className="save">Save</button>
                    <button className="cancel">Cancel</button>
                </div>
            </div>
        </div>
    );
};

export default AddNewSalaryComponent;
