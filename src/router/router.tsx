import WorkflowLayout from "@/layout/WorkflowLayout.tsx";
import React from "react";
import { createHashRouter } from "react-router-dom";

const TestDashboard = React.lazy(() => import('@/pages/TestDashboard.tsx'));
const TestFormDesign = React.lazy(() => import('@/pages/TestFormDesign.tsx'));
const TestBpmnModel = React.lazy(() => import('@/pages/TestBpmnModel.tsx'));

export const router = createHashRouter([
  {
    path: "/",
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
  }
]);
