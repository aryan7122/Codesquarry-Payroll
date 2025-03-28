import { useNavigate, useSearchParams } from "react-router-dom";
import { useState } from "react";
import "../AddNewSalaryComponent/AddNewSalaryComponent.scss"; // Import SCSS file
import { IoMdCloseCircleOutline } from "react-icons/io";
import { RiLightbulbFlashLine } from "react-icons/ri";
import BasicSalaryForm from "./EditPages/BasicSalaryForm";
import HRASalaryForm from "./EditPages/HRASalaryForm";
import ConveyanceAllowanceSalaryForm from "./EditPages/ConveyanceAllowanceSalaryForm";
import FixedAllowanceSalaryForm from "./EditPages/FixedAllowanceSalaryForm";
import BonusForm from "./EditPages/BonusForm";
import CommissionForm from "./EditPages/CommissionForm";
import ChildrenEducationAllowanceForm from "./EditPages/ChildrenEducationAllowanceForm";
import TransportAllowanceForm from "./EditPages/TransportAllowanceForm";
import TravellingAllowanceForm from "./EditPages/TravellingAllowanceForm";
import LeaveEncashmentForm from "./EditPages/LeaveEncashmentForm";
import GratuityForm from "./EditPages/GratuityForm";
import OvertimeAllowanceForm from "./EditPages/OvertimeAllowanceForm";
import NoticePayForm from "./EditPages/NoticePayForm";
import HoldSalaryForm from "./EditPages/HoldSalaryForm";
import NoticePayDeductionForm from "./EditPages/NoticePayDeductionForm";
import WithheldSalaryForm from "./EditPages/WithheldSalaryForm";
import VoluntaryProvidentFundForm from "./EditPages/VoluntaryProvidentFundForm";
import FuelReimbursementForm from "./EditPages/FuelReimbursementForm";

const EditSalaryComponent = () => {
    const [searchParams] = useSearchParams();
    const type = searchParams.get("type"); // Get the type from URL
    const name = searchParams.get("name"); // Get the name from URL
    console.log('searchParams', type)
    const [formData, setFormData] = useState({});

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const navigate = useNavigate();
    const [showPopup, setShowPopup] = useState(false);

    return (
        <div className="salary-components">

            <div className="header">
                <h2>
                    {
                        type === "Earnings" ? "Edit Earning" :
                            type === "Deductions" ? "Edit Deduction" :
                                type === "Benefits" ? "Edit Benefit" :
                                    "Edit Reimbursement"
                    }  -  {name}
                </h2>
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
            <div className="form-container">
                {/* Common Fields */}


                {/* Conditional Fields Based on Type */}
                {name === "Basic" && (
                    <>
                        <BasicSalaryForm showPopup={showPopup} setShowPopup={setShowPopup} />
                    </>
                )}

                {name === "House Rent Allowance" && (
                    <>
                        <HRASalaryForm showPopup={showPopup} setShowPopup={setShowPopup} />
                    </>
                )}
                {name === "Conveyance Allowance" && (
                    <>
                        <ConveyanceAllowanceSalaryForm showPopup={showPopup} setShowPopup={setShowPopup} />
                    </>
                )}
                {name === "Fixed Allowance" && (
                    <>
                        <FixedAllowanceSalaryForm showPopup={showPopup} setShowPopup={setShowPopup} />

                    </>
                )}
                {name === "Bonus" && (
                    <>
                        <BonusForm showPopup={showPopup} setShowPopup={setShowPopup} />

                    </>
                )}
                {name === "Commission" && (
                    <>
                        <CommissionForm showPopup={showPopup} setShowPopup={setShowPopup} />

                    </>
                )}
                {name === "Children Education Allowance" && (
                    <>
                        <ChildrenEducationAllowanceForm showPopup={showPopup} setShowPopup={setShowPopup} />
                    </>
                )}
                {name === "Transport Allowance" && (
                    <>
                        <TransportAllowanceForm showPopup={showPopup} setShowPopup={setShowPopup} />
                    </>
                )}
                {name === "Travelling Allowance" && (
                    <>
                        <TravellingAllowanceForm showPopup={showPopup} setShowPopup={setShowPopup} />
                    </>
                )}
                {name === "Leave Encashment" && (
                    <>
                        <LeaveEncashmentForm showPopup={showPopup} setShowPopup={setShowPopup} />
                    </>
                )}
                {name === "Gratuity" && (
                    <>
                        <GratuityForm showPopup={showPopup} setShowPopup={setShowPopup} />
                    </>
                )}
                {name === "Overtime Allowance" && (
                    <>
                        <OvertimeAllowanceForm showPopup={showPopup} setShowPopup={setShowPopup} />
                    </>
                )}
                {name === "Notice Pay" && (
                    <>
                        <NoticePayForm showPopup={showPopup} setShowPopup={setShowPopup} />
                    </>
                )}
                {name === "Hold Salary" && (
                    <>
                        <HoldSalaryForm showPopup={showPopup} setShowPopup={setShowPopup} />
                    </>
                )}
                {name === "Notice Pay Deduction" && (
                    <>
                        <NoticePayDeductionForm showPopup={showPopup} setShowPopup={setShowPopup} />
                    </>
                )}
                {name === "Withheld Salary" && (
                    <>
                        <WithheldSalaryForm showPopup={showPopup} setShowPopup={setShowPopup} />
                    </>
                )}
                {name === "Voluntary Provident Fund" && (
                    <>
                        <VoluntaryProvidentFundForm showPopup={showPopup} setShowPopup={setShowPopup} />
                    </>
                )}
                {name === "Fuel Reimbursement" && (
                    <>
                        <FuelReimbursementForm showPopup={showPopup} setShowPopup={setShowPopup} />
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

export default EditSalaryComponent;
