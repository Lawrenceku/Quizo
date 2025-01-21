import React, { useState, useEffect } from "react";
import Quiz from "./Quiz";
import {Navbar} from "../utils/index";


const QuizContainer = () => {
    return (
        <div>
            <Navbar />
            <Quiz />
        </div>
    );
};

export default QuizContainer;
