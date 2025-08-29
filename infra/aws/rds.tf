resource "aws_db_subnet_group" "db_subnets" {
  name = "${var.project}-db-subnets"
  subnet_ids = [
    aws_subnet.private_a.id,
    aws_subnet.private_b.id
  ]
  tags = { Name = "${var.project}-db-subnets" }
}
