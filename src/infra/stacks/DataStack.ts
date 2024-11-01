import { Stack, StackProps } from "aws-cdk-lib";
import { AttributeType, ITable, Table } from "aws-cdk-lib/aws-dynamodb";
import { Construct } from "constructs";
import { getSuffixFromStack } from "../Utils";

export class DataStack extends Stack {
  public readonly table: ITable;

  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const helloTable = new Table(this, "HelloTable", {
      partitionKey: {
        name: "id",
        type: AttributeType.STRING,
      },
      tableName: `hello-table-${getSuffixFromStack(this)}`,
    });

    this.table = helloTable;
  }
}
