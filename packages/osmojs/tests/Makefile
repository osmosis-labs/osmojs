HELM_NAME = osmojs
HELM_FILE = configs/config.yaml
HELM_REPO = shuttle
HELM_CHART = devnet

###############################################################################
###                              Helm commands                              ###
###############################################################################

.PHONY: setup
setup:
	helm repo add $(HELM_REPO) https://anmol1696.github.io/shuttle/
	helm repo update
	helm search repo $(HELM_REPO)/$(HELM_CHART)

.PHONY: install
install:
	helm install -f $(HELM_FILE) $(HELM_NAME) $(HELM_REPO)/$(HELM_CHART)
	$(MAKE) get-values

.PHONY: upgrade
upgrade:
	helm upgrade --debug -f $(HELM_FILE) $(HELM_NAME) $(HELM_REPO)/$(HELM_CHART)
	$(MAKE) get-values

.PHONY: debug
debug:
	helm install --dry-run --debug -f $(HELM_FILE) $(HELM_NAME) $(HELM_REPO)/$(HELM_CHART)
	$(MAKE) get-values

get-values:
	helm get values osmojs --all -o json > configs/values.json

.PHONY: delete
delete:
	-helm delete $(HELM_NAME)

###############################################################################
###                              Port forward                              ###
###############################################################################

.PHONY: port-forward port-forward-all
.port-forward:
	kubectl port-forward pods/$(chain)-genesis-0 $(localrpc):26657 &
	kubectl port-forward pods/$(chain)-genesis-0 $(localrest):1317 &

num_chains = $(shell yq -r ".chains | length" $(HELM_FILE))
port-forward-all:
	echo "Port forwarding all chains to localhost"
	for i in $(shell seq 0 $(num_chains)); do \
  		$(MAKE) .port-forward \
  			chain=$$(yq -r ".chains[$$i].name" $(HELM_FILE)) \
  			localrpc=$$(yq -r ".chains[$$i].ports.rpc" $(HELM_FILE)) \
  			localrest=$$(yq -r ".chains[$$i].ports.rest" $(HELM_FILE)); \
	done
	echo "Port forwarding explorer to localhost"
	kubectl port-forward service/explorer 8080:8080 &

.PHONY: stop-forward
stop-forward:
	-pkill -f "port-forward"

.PHONY: check-forward
check-forward-all:
	while true ; do \
		for port in $$(yq -r "(.chains[] | .ports | .rpc, .rest), .explorer.localPorts.rest" $(HELM_FILE)); do \
			nc -vz 127.0.0.1 $$port; \
		done; \
		sleep 10; \
	done
