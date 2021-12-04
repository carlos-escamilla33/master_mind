import React from "react";

const NumberOptions = () => {
    const numOptions = [0, 1, 2, 3, 4, 5, 6, 7];

    return (
        <form>
            <h2>Number Board</h2>
            {
                numOptions.map((num, id) => (
                    <div key={id}>
                        <h4>{num}</h4>
                    </div>
                ))
            }
            <button type="submit">Submit</button>
        </form>
    )
}

export default NumberOptions