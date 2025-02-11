ifneq (,$(wildcard .env))
    include .env
    export
endif

PHONY: create-db install-uuid stop remove clean

create-db:
	docker run --name $(POSTGRES_CONTAINER_NAME) \
	-e POSTGRES_USER=$(POSTGRES_USER) \
	-e POSTGRES_PASSWORD=$(POSTGRES_PASSWORD) \
	-e POSTGRES_DB=$(POSTGRES_DB) \
	-d $(POSTGRES_IMAGE)

install-uuid:
	docker exec -it $(POSTGRES_CONTAINER_NAME) psql -U $(POSTGRES_USER) -d $(POSTGRES_DB) -c "CREATE EXTENSION IF NOT EXISTS \"uuid-ossp\";"

stop-db:
	docker stop $(POSTGRES_CONTAINER_NAME)

remove-db:
	docker rm $(POSTGRES_CONTAINER_NAME)

clean-db:
	stop-db remove-db
