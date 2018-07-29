"""empty message

Revision ID: 4fd2e1e7317e
Revises: 01db93e9a7e9
Create Date: 2018-07-29 00:14:30.299584

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '4fd2e1e7317e'
down_revision = '01db93e9a7e9'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_constraint('cab_invoice_cab_id_fkey', 'cab_invoice', type_='foreignkey')
    op.drop_column('cab_invoice', 'cab_id')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('cab_invoice', sa.Column('cab_id', sa.INTEGER(), autoincrement=False, nullable=True))
    op.create_foreign_key('cab_invoice_cab_id_fkey', 'cab_invoice', 'cab', ['cab_id'], ['id'])
    # ### end Alembic commands ###
