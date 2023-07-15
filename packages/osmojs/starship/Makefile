HELM_NAME = osmojs
HELM_FILE = configs/config.yaml
HELM_REPO = starship
HELM_CHART = devnet
HELM_VERSION = v0.1.38

###############################################################################
###                              All commands                               ###
###############################################################################

.PHONY: setup
setup: check setup-helm

.PHONY: test
test:
	yarn run jest --testPathPattern=../starship --runInBand --verbose --bail

.PHONY: stop
stop: stop-forward delete

.PHONY: clean
clean: stop clean-kind

###############################################################################
###                              Helm commands                              ###
###############################################################################

.PHONY: setup-helm
setup-helm:
	helm repo add $(HELM_REPO) https://cosmology-tech.github.io/starship/
	helm repo update
	helm search repo $(HELM_REPO)/$(HELM_CHART) --version $(HELM_VERSION)

.PHONY: install
install:
	@echo "Installing the helm chart. This is going to take a while....."
	@echo "You can check the status with \"kubectl get pods\", run in another terminal please"
	helm install -f $(HELM_FILE) $(HELM_NAME) $(HELM_REPO)/$(HELM_CHART) --version $(HELM_VERSION)
	@echo "Run \"kubectl get pods\" to check the status of the cluster"

.PHONY: upgrade
upgrade:
	helm upgrade --debug -f $(HELM_FILE) $(HELM_NAME) $(HELM_REPO)/$(HELM_CHART) --version $(HELM_VERSION)

.PHONY: debug
debug:
	helm install --dry-run --debug -f $(HELM_FILE) $(HELM_NAME) $(HELM_REPO)/$(HELM_CHART)

.PHONY: delete
delete:
	-helm delete $(HELM_NAME)

###############################################################################
###                                 Port forward                            ###
###############################################################################

.PHONY: port-forward
port-forward:
	bash $(CURDIR)/scripts/port-forward.sh --config=$(HELM_FILE)

.PHONY: stop-forward
stop-forward:
	-pkill -f "port-forward"

###############################################################################
###                          Local Kind Setup                               ###
###############################################################################
KIND_CLUSTER=starship
DOCKER_INFO:=$(shell docker info 2> /dev/null )

.PHONY: check
check: check-docker
	bash $(CURDIR)/scripts/dev-setup.sh

.PHONY: check-docker
check-docker:
	@if ! docker info > /dev/null 2>&1; then \
		$(error "Docker does not seem to be running, please make sure docker command is running: docker info"); \
	fi

.PHONY: setup-kind
setup-kind: check
	kind create cluster --name $(KIND_CLUSTER)

.PHONY: clean-kind
clean-kind:
	kind delete cluster --name $(KIND_CLUSTER)
