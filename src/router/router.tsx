import { AdminLayout } from "@/layout/AdminLayout.tsx";
import WorkflowLayout from "@/layout/WorkflowLayout.tsx";
import TestBpmnModel from "@/pages/TestBpmnModel.tsx";
import TestDashboard from "@/pages/TestDashboard.tsx";
import TestFormDesign from "@/pages/TestFormDesign.tsx";
import { createHashRouter } from "react-router-dom";

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
  },
  {
    path: "/AdminLayout",
    element: <AdminLayout />,
    children: [
      {
        path: "TestDashboard",
        element: <TestDashboard />,
      },
    ],
  },
]);
