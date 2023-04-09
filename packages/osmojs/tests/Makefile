HELM_NAME = osmojs
HELM_FILE = configs/config.yaml
HELM_REPO = starship
HELM_CHART = devnet
HELM_VERSION = v0.1.21

###############################################################################
###                              Helm commands                              ###
###############################################################################

.PHONY: setup
setup:
	helm repo add $(HELM_REPO) https://cosmology-tech.github.io/starship/
	helm repo update
	helm search repo $(HELM_REPO)/$(HELM_CHART) --version $(HELM_VERSION)

.PHONY: install
install:
	helm install -f $(HELM_FILE) $(HELM_NAME) $(HELM_REPO)/$(HELM_CHART) --version $(HELM_VERSION)

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
###                              Port forward                              ###
###############################################################################

setup-forward:
ifeq (,$(wildcard bin/port-forward.sh))
	@echo "Fetching port-forward script from github, since not found..."
	mkdir -p bin/
	curl -o bin/port-forward.sh https://raw.githubusercontent.com/cosmology-tech/starship/main/scripts/port-forward.sh
	curl -o bin/common.sh https://raw.githubusercontent.com/cosmology-tech/starship/main/scripts/common.sh
endif

.PHONY: port-forward
port-forward: setup-forward
	bash bin/port-forward.sh --config=$(HELM_FILE)

.PHONY: stop-forward
stop-forward:
	-pkill -f "port-forward"
