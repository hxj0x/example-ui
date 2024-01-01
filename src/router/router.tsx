import { createBrowserRouter } from "react-router-dom";
import HelloWord from "../pages/HelloWord.tsx";
import { AdminLayout } from "@/layout/AdminLayout.tsx";
import TestDashboard from "@/pages/TestDashboard.tsx";
import WorkflowLayout from "@/layout/WorkflowLayout.tsx";
import TestFormDesign from "@/pages/TestFormDesign.tsx";
import TestBpmnModel from "@/pages/TestBpmnModel.tsx";

export const router = createBrowserRouter([
    {
        path: "/HelloWord",
        element: <HelloWord />
    },
    {
        path: "/WorkflowLayout",
        element: <WorkflowLayout />,
        children: [
            {
                path: "TestDashboard",
                element: <TestDashboard />,
            },
            {
                path: "TestFormDesign",
                element: <TestFormDesign />,
            },
            {
                path: "TestBpmnModel",
                element: <TestBpmnModel />,
            },
        ],
    },
    {
        path: "/AdminLayout",
        element: <AdminLayout />,
        children: [
            {
                path: "TestDashboard",
                element: <TestDashboard />,
            },
        ]
    },
]);