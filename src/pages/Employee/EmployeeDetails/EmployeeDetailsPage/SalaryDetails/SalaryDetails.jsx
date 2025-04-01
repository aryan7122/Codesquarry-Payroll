import React from 'react';
import './SalaryDetails.scss';

const SalaryDetails = () => {
    const salaryData = {
        bank: {
            name: 'State Bank of India',
            accountNumber: '04515110013879865',
            ifsc: 'SBI00245KVL',
            paymentMode: 'Net Banking',
            basicSalary: '10,000',
            salaryMonth: 'March, 2025'
        },
        ctc: {
            annual: '₹4,00,000.00 per year',
            monthly: '₹33,333.00 per month'
        },
        components: [
            { name: 'Basic', monthly: '₹6,667.00', annual: '₹80,004.00', percentage: '20.00 % of CTC' },
            { name: 'House Rent Allowance', monthly: '₹667.00', annual: '₹8,004.00', percentage: '10.00 % of Basic Amount' },
            { name: 'Conveyance Allowance', monthly: '₹5,000.00', annual: '₹60,000.00' },
            { name: 'Fixed Allowance', monthly: '₹20,999.00', annual: '₹2,51,988.00' }
        ]
    };

    return (
        <div className="salary-container">
            <div className="salary-header">
                <div className="bank-details">
                    <p><strong>Bank Name:</strong> {salaryData.bank.name}</p>
                    <p><strong>Account number:</strong> {salaryData.bank.accountNumber}</p>
                    <p><strong>IFSC Code:</strong> {salaryData.bank.ifsc}</p>
                    <p><strong>Payment Mode:</strong> {salaryData.bank.paymentMode}</p>
                    <p><strong>Basic Salary:</strong> {salaryData.bank.basicSalary}</p>
                    <p><strong>Salary Month:</strong> {salaryData.bank.salaryMonth}</p>
                </div>
                <button className="edit-btn">Edit</button>
            </div>

            <div className="salary-breakdown">
                <h2>Salary Breakdown</h2>
                <div className="ctc-info">
                    <p><strong>Annual CTC:</strong> {salaryData.ctc.annual}</p>
                    <p><strong>Monthly CTC:</strong> {salaryData.ctc.monthly}</p>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>Salary Components</th>
                            <th>Monthly Amount</th>
                            <th>Annual Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {salaryData.components.map((item, index) => (
                            <tr key={index}>
                                <td>
                                    <div className="component-title">{item.name}</div>
                                    {item.percentage && <small>{item.percentage}</small>}
                                </td>
                                <td>{item.monthly}</td>
                                <td>{item.annual}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="total">
                    <p><strong>Cost to Company</strong></p>
                    <p>{salaryData.ctc.monthly}</p>
                    <p>{salaryData.ctc.annual}</p>
                </div>
            </div>
        </div>
    );
};

export default SalaryDetails;