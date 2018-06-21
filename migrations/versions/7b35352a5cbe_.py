"""empty message

Revision ID: 7b35352a5cbe
Revises: 804e432b213b
Create Date: 2018-06-21 22:37:36.528103

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '7b35352a5cbe'
down_revision = '804e432b213b'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('facility', sa.Column('bed_type', sa.Integer(), nullable=True))
    op.add_column('facility', sa.Column('no_of_bed', sa.Integer(), nullable=True))
    op.drop_column('hotel', 'no_of_bed')
    op.drop_column('hotel', 'bed_type')
    op.alter_column('price', 'weekend',
               existing_type=sa.BOOLEAN(),
               nullable=False)
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('price', 'weekend',
               existing_type=sa.BOOLEAN(),
               nullable=True)
    op.add_column('hotel', sa.Column('bed_type', sa.INTEGER(), autoincrement=False, nullable=True))
    op.add_column('hotel', sa.Column('no_of_bed', sa.INTEGER(), autoincrement=False, nullable=True))
    op.drop_column('facility', 'no_of_bed')
    op.drop_column('facility', 'bed_type')
    # ### end Alembic commands ###
