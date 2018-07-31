"""empty message

Revision ID: c329a06d1755
Revises: 01db93e9a7e9
Create Date: 2018-07-31 10:00:07.393216

"""
from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import postgresql

# revision identifiers, used by Alembic.
revision = 'c329a06d1755'
down_revision = '01db93e9a7e9'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('cab_website',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('created_at', sa.DateTime(timezone=True), nullable=True),
    sa.Column('updated_at', sa.DateTime(timezone=True), nullable=True),
    sa.Column('website', sa.String(), nullable=True),
    sa.Column('logo_image', sa.String(), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_index(op.f('ix_cab_website_id'), 'cab_website', ['id'], unique=False)
    op.drop_table('tag')
    op.drop_constraint('cab_booking_cab_id_key', 'cab_booking', type_='unique')
    op.add_column('cab_invoice', sa.Column('website_id', sa.Integer(), nullable=True))
    op.drop_constraint('cab_invoice_cab_id_fkey', 'cab_invoice', type_='foreignkey')
    op.create_foreign_key(None, 'cab_invoice', 'cab_website', ['website_id'], ['id'])
    op.drop_column('cab_invoice', 'cab_id')
    op.add_column('hotel', sa.Column('phone', sa.String(), nullable=True))
    op.create_unique_constraint(None, 'hotel', ['phone'])
    op.add_column('restaurant_amenity', sa.Column('gastro_pub', sa.Boolean(), nullable=True))
    op.drop_column('restaurant_amenity', 'gastro_Pub')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('restaurant_amenity', sa.Column('gastro_Pub', sa.BOOLEAN(), autoincrement=False, nullable=True))
    op.drop_column('restaurant_amenity', 'gastro_pub')
    op.drop_constraint(None, 'hotel', type_='unique')
    op.drop_column('hotel', 'phone')
    op.add_column('cab_invoice', sa.Column('cab_id', sa.INTEGER(), autoincrement=False, nullable=True))
    op.drop_constraint(None, 'cab_invoice', type_='foreignkey')
    op.create_foreign_key('cab_invoice_cab_id_fkey', 'cab_invoice', 'cab', ['cab_id'], ['id'])
    op.drop_column('cab_invoice', 'website_id')
    op.create_unique_constraint('cab_booking_cab_id_key', 'cab_booking', ['cab_id'])
    op.create_table('tag',
    sa.Column('id', sa.INTEGER(), nullable=False),
    sa.Column('created_at', postgresql.TIMESTAMP(timezone=True), autoincrement=False, nullable=True),
    sa.Column('updated_at', postgresql.TIMESTAMP(timezone=True), autoincrement=False, nullable=True),
    sa.Column('restaurant_id', sa.INTEGER(), autoincrement=False, nullable=True),
    sa.Column('breakfast', sa.BOOLEAN(), autoincrement=False, nullable=True),
    sa.Column('lunch', sa.BOOLEAN(), autoincrement=False, nullable=True),
    sa.Column('dinner', sa.BOOLEAN(), autoincrement=False, nullable=True),
    sa.Column('cafe', sa.BOOLEAN(), autoincrement=False, nullable=True),
    sa.Column('lounge', sa.BOOLEAN(), autoincrement=False, nullable=True),
    sa.Column('family', sa.BOOLEAN(), autoincrement=False, nullable=True),
    sa.Column('bars', sa.BOOLEAN(), autoincrement=False, nullable=True),
    sa.Column('nightlife', sa.BOOLEAN(), autoincrement=False, nullable=True),
    sa.Column('street_stalls', sa.BOOLEAN(), autoincrement=False, nullable=True),
    sa.Column('pocket_friendly', sa.BOOLEAN(), autoincrement=False, nullable=True),
    sa.Column('diet', sa.BOOLEAN(), autoincrement=False, nullable=True),
    sa.Column('luxury', sa.BOOLEAN(), autoincrement=False, nullable=True),
    sa.ForeignKeyConstraint(['restaurant_id'], ['restaurant.id'], name='tag_restaurant_id_fkey'),
    sa.PrimaryKeyConstraint('id', name='tag_pkey'),
    sa.UniqueConstraint('restaurant_id', name='tag_restaurant_id_key')
    )
    op.drop_index(op.f('ix_cab_website_id'), table_name='cab_website')
    op.drop_table('cab_website')
    # ### end Alembic commands ###
