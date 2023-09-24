import { prisma } from "../../../prisma";
import type { Project } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";

type SuccessResponse = Project[];

interface ErrorResponse {
  error: string;
}

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<SuccessResponse | ErrorResponse>
) {
  switch (req.method) {
    case "GET":
      return getHandler();
    default:
      return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  async function getHandler() {
    try {
      const projects = await prisma.project.findMany();

      return res.status(200).send(projects);
    } catch (error: any) {
      console.error(error);
      return res.status(400).send({ error: error.message });
    }
  }
}

export default handler;
