import { Empty, Table, Typography } from "antd";
import { PortfolioProject, PORTFOLIO_COLUMNS } from "@/utils";

interface PortfolioResultProps {
  portfolio?: PortfolioProject[];
}

export function PortfolioResult(props: PortfolioResultProps) {
  if (!props.portfolio)
    return (
      <>
        <Empty description="Create your portfolio" />
      </>
    );
  const dataSource = props.portfolio.map((project) => ({
    ...project,
    price: (project.weight * project.pricePerTon).toFixed(2),
    weight: project.weight.toFixed(2),
    key: project.id,
  }));

  const totalPrice = props.portfolio.reduce(
    (acc, project) => acc + project.weight * project.pricePerTon,
    0
  );
  const totalWeight = props.portfolio.reduce(
    (acc, project) => acc + project.weight,
    0
  );

  const hasPortfolio = props.portfolio.length !== 0;

  return (
    <>
      {hasPortfolio && (
        <Table
          columns={PORTFOLIO_COLUMNS}
          dataSource={dataSource}
          summary={() => {
            return (
              <>
                <Table.Summary.Row>
                  <Table.Summary.Cell index={0}>
                    {" "}
                    <Typography.Text strong>Total</Typography.Text>
                  </Table.Summary.Cell>
                  <Table.Summary.Cell index={1} />
                  <Table.Summary.Cell index={2} />
                  <Table.Summary.Cell index={3}>
                    <Typography.Text strong>
                      {totalPrice.toFixed(2)}
                    </Typography.Text>
                  </Table.Summary.Cell>
                  <Table.Summary.Cell index={4}>
                    <Typography.Text strong>{totalWeight}</Typography.Text>
                  </Table.Summary.Cell>
                </Table.Summary.Row>
              </>
            );
          }}
        ></Table>
      )}
    </>
  );
}
