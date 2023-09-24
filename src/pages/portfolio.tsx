import { PortfolioResult } from "@/components/PortfolioResult/PortfolioResult";
import { PortfolioProject, calculatePortfolio } from "@/utils";
import { useGetProjects } from "@/hooks/useGetProjects";
import { Button, Card, InputNumber, Space } from "antd";
import Head from "next/head";
import { useState } from "react";

export default function Portfolio() {
  const [inputValue, setInputValue] = useState<number | null>(null);
  const [portfolio, setPortfolio] = useState<PortfolioProject[] | undefined>();
  const { data, loading, error, refetch } = useGetProjects();

  const portfolioProjects = data.map((project) => {
    return {
      ...project,
      weight: 0,
      isActive: true,
    };
  });

  return (
    <>
      <Head>
        <title>Porfolio</title>
        <meta name="description" content="Portfolio app portfolio page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="content-layout">
        <Card
          title="Portfolio"
          className="page-card"
          bodyStyle={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
          extra={
            <Space direction="horizontal">
              <InputNumber
                min={1}
                addonAfter={"tons"}
                value={inputValue}
                onChange={(newValue) => setInputValue(newValue)}
                placeholder="Enter your credits"
              />
              <Button
                onClick={() => {
                  if (typeof inputValue !== "number") return;
                  const result = calculatePortfolio(
                    portfolioProjects,
                    inputValue
                  );
                  setPortfolio(result);
                }}
              >
                Calculate
              </Button>
            </Space>
          }
        >
          <Space direction="vertical">
            <PortfolioResult portfolio={portfolio} />
          </Space>
        </Card>
      </main>
    </>
  );
}
