// import InputGroup from "./InputGroup";
export default function UserInput({ userInput, onChange }) {
    return (
        <section id="user-input">
            <div className="user-input">
                <div className="input-group">
                    <p>
                        <label htmlFor="initial_investment">Initial Investment</label>
                        <input
                            id="initial_investment"
                            type="number"
                            name="initialInvestment"
                            value={userInput.initialInvestment}
                            onChange={(event) => onChange('initialInvestment', event.target.value*1)}
                            required
                        />
                    </p>
                    <p>
                        <label htmlFor="annual_investment">Annual Investment</label>
                        <input
                            id="annual_investment"
                            type="number"
                            name="annualInvestment"
                            value={userInput.annualInvestment}
                            onChange={(event) => onChange('annualInvestment', event.target.value)*1}
                            required
                        />
                    </p>
                </div>

                <div className="input-group">
                    <p>
                        <label htmlFor="return">Expected Return</label>
                        <input
                            id="return"
                            type="number"
                            name="expectedReturn"
                            value={userInput.expectedReturn}
                            onChange={(event) => onChange('expectedReturn', event.target.value*1)}
                        />
                    </p>
                    <p>
                        <label htmlFor="duration">Duration</label>
                        <input
                            id="duration"
                            type="number"
                            name="duration"
                            value={userInput.duration}
                            onChange={(event) => onChange('duration', event.target.value*1)}
                        />
                    </p>
                </div>
            </div>
        </section>
    );
}
